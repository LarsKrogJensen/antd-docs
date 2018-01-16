import * as React from "react"
import io from 'socket.io-client'


export class PushPage extends React.Component {


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
        })
        this.socket.on("connection", (socket) => {
            console.log("Socket connected");
        })

        this.socket.on("message", data => {
            console.log("message: " + data);
        })

        this.socket.open()
        // this.socket.connect()
        this.socket.emit('subscribe', {topic: "kambiplay.ev.json"})
    }

    componentWillUnmount(): void {
        this.socket.close()
    }

    render(): React.ReactNode {
        return <div>Push Page</div>
    }
}