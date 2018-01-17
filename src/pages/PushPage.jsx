import * as React from "react"
import io from 'socket.io-client'
import { Button, Input, Table, Tag, Modal } from "antd";
import moment from "moment";
import autobind from "autobind-decorator"

const Search = Input.Search;

type Message = {
  key: string,
  time: number,
  type: number,
  body: any
}

export class PushPage extends React.Component<any, { messages: Array<Message> }> {
  socket: SocketIOClient.Socket
  rowCounter: number = 0

  state = {
    messages: [],
    subscriptions: [],
    textFilter: "",
    typeFilter: [],
    showMessage: undefined
  }

  columns = [
    {
      title: "Time",
      dataIndex: "time",
      key: "time",
      width: 100,
      render: (text, record) => moment.unix(record.time / 1000).format("hh:mm:ss.SSS")
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
      width: 100,
      render: (text, record) => this.messageTypeToText(record.type)
    },
    {
      title: "Message",
      dataIndex: "body",
      key: "body",
      width: 500,
      render: (text, record) => <a onClick={(e) => {
        this.setState({ showMessage: record })
      }}>{JSON.stringify(this.messageTypeToPayload(record))}</a>
    }
  ]

  componentDidMount(): void {
    this.socket = io(`wss://e1-push.aws.kambicdn.com`, {
      // this.socket = io(`ws://localhost:15017`, {
      transports: ['websocket'],
      upgrade: false,
      autoConnect: false,
      path: "/socket.io"
    })

    this.socket.on("connect", (socket) => {
      console.log("Socket connected");
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

    this.socket.on("message", this.processData)
    this.socket.open()
  }

  componentWillUnmount(): void {
    this.socket.close()
  }

  render(): React.ReactNode {
    const { messages, subscriptions, showMessage } = this.state
    return <div>
      <div style={{ margin: 8, display: "flex", flexDirection: "row" }}>
        <Search placeholder="input routing key"
                enterButton="Subscribe"
                onSearch={this.handleSubscribe}
                style={{ width: 400 }}/>
        <div style={{ flex: 1 }}/>
        <Button onClick={this.handleClearMessages}>Clear</Button>
      </div>
      {this.renderSubscriptionTags(subscriptions)}
      <Table
        style={{ marginLeft: 8, marginRight: 8 }}
        columns={this.columns}
        rowKey="rowKey"
        dataSource={messages}
        pagination={false} size="small"/>

      {this.renderMessage(showMessage)}
    </div>
  }

  @autobind
  renderMessage(message: Message) {
    if (message) {
      return (
        <Modal
          title="Basic Modal"
          visible
          onOk={this.handleOk}
          onCancel={this.handleCancel}>
          <p>{JSON.stringify(message.body)}</p>
        </Modal>)
    }
  }

  @autobind
  renderSubscriptionTags(subscriptions: Array<string>) {
    if (!!subscriptions.length) {
      return (
        <div style={{ display: "flex", flexDirection: "row", marginLeft: 8, marginBottom: 8, marginRight: 8 }}>
          {subscriptions.map(subscription => (
            <Tag key={subscription} closable onClose={() => this.handleUnsubscribe(subscription)}>{subscription}</Tag>
          ))}
        </div>)
    }

    return null
  }

  @autobind
  handleClearMessages() {
    this.setState({ messages: [] })
  }

  @autobind
  handleUnsubscribe(topic: string) {
    this.socket.emit('unsubscribe', { topic })

    this.setState(prevState => ({
        subscriptions: prevState.subscriptions.filter(sub => sub !== topic)
      })
    )
  }

  @autobind
  handleSubscribe(topic: string) {
    const hasSubscription = this.state.subscriptions.indexOf(topic) !== -1
    if (!hasSubscription) {
      this.socket.emit('subscribe', { topic })

      this.setState(prevState => ({
        subscriptions: [...prevState.subscriptions, topic]
      }))
    }
  }

  @autobind
  processData(data: any) {
    const parsedData = JSON.parse(data)
    this.setState(prevState => {
      let messages = [...prevState.messages, ...parsedData.map(msg => (
        {
          rowKey: this.uniqueRowKey(),
          time: msg.t,
          type: msg.mt,
          body: msg
        }))
      ];

      if (messages.length > 500) {
        messages = messages.slice(400, messages.length - 1)
      }

      return {
        messages
      }
    })
  }

  @autobind
  uniqueRowKey(): string {
    this.rowCounter += 1
    return this.rowCounter
  }

  @autobind
  messageTypeToText(type: number) {
    switch (type) {
      case 4:
        return `EventAdded (${type})`
      case 5:
        return `LiveEventOpened (${type})`
      case 6:
        return `BetOfferAdded (${type})`
      case 7:
        return `BetOfferRemoved (${type})`
      case 8:
        return `BetOfferStatusUpdate (${type})`
      case 9:
        return `AllBetOffersSuspended (${type})`
      case 11:
        return `BetOfferOddsUpdate (${type})`
      case 12:
        return `MatchClockRemoved (${type})`
      case 15:
        return `MatchClockUpdated (${type})`
      case 16:
        return `EventScoreUpdated (${type})`
      case 17:
        return `EventStatsUpdated (${type})`
      case 18:
        return `EventRemoved (${type})`
      case 19:
        return `TickerUpdated (${type})`
      case 20:
        return `EventDescrUpdated (${type})`
      case 22:
        return `BetOfferOddsAdded (${type})`
      case 23:
        return `BetOfferOddsRemoved (${type})`
      case 25:
        return `MatchOccurence (${type})`
      case 27:
        return `VisualizationOccurrence (${type})`
      case 28:
        return `LiveStatistics (${type})`
      default:
        return `UNKNOWN (${type})`
    }
  }

  @autobind
  messageTypeToPayload(message: Message) {
    switch (message.type) {
      case 4:
        return message.body.ea
      case 5:
        return message.body.leo
      case 6:
        return message.body.boa
      case 7:
        return message.body.bor
      case 8:
        return message.body.bosu
      case 9:
        return message.body.abos
      case 11:
        return message.body.boou
      case 12:
        return message.body.mcr
      case 15:
        return message.body.mcu
      case 16:
        return message.body.score
      case 17:
        return message.body.stats
      case 18:
        return message.body.er
      case 19:
        return message.body.tu
      case 20:
        return message.body.desc
      case 22:
        return message.body.booa
      case 23:
        return message.body.boor
      case 25:
        return message.body.mo
      case 27:
        return message.body.vo
      case 28:
        return message.body.ls
      default:
        return undefined
    }
  }
}

// render: (text, record) => <div style={{
//   whiteSpace: "nowrap",
//   textOverflow: "ellipsis"}}>{JSON.stringify(record.body)}</div>
// overflow: "hidden",