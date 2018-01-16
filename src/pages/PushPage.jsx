import * as React from "react"
import io from 'socket.io-client'


export class PushPage extends React.Component {
    socket: SocketIOClient.Socket

    componentDidMount(): void {
        // this.socket = io(`wss://e1-push.aws.kambicdn.com/socket.io/?EIO=3&transport=websocket`, {
        this.socket = io(`wss://e1-push.aws.kambicdn.com`, {
            transports: ['websocket'],
            upgrade: false,
            autoConnect: false,
            path: "/socket.io"
        })
        console.log("Socket id: " + this.socket.id);

        this.socket.on("connect", (socket) => {
            console.log("Socket connected");
            this.socket.emit('subscribe', {topic: "kambiplay.ev.json"})
        })

        this.socket.on("disconnect", (reason) => {
            console.log("Socket disconnected: " + reason);
        })

        this.socket.on('reconnect', (attemptNumber) => {
            console.log("Socket reconnected");
        });

        this.socket.on('error', (error) => {
            console.log("Socket error: " + error);
        });

        this.socket.on('reconnect_attempt', (attemptNumber) => {
            console.log("Socket reconnect attempt " + attemptNumber);
        });

        this.socket.on("message", data => {
            const messages = JSON.parse(data)
            console.log("messages length: " + messages.length);
            // for (let msg of messages) {
            //     console.table(msg)
            // }
        })

        this.socket.open()
        // this.socket.connect()

    }

    componentWillUnmount(): void {
        this.socket.close()
    }

    render(): React.ReactNode {
        return <div>Push Page</div>
    }
}