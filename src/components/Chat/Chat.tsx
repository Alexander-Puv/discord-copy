import Header from './components/Header'
import Messages from './components/Messages'
import SendMessage from './components/SendMessage'

const Chat = () => {

  return (
    <div className='flex-1 min-w-0 min-h-0 flex flex-col'>
      <Header />
      <main className="flex-1 flex flex-col">
        <Messages />
        <SendMessage />
      </main>
    </div>
  )
}

export default Chat