import ChannelsSidebar from "./components/ChannelsSidebar/ChannelsSidebar"
import Chat from "./components/Chat/Chat"
import Sidebar from "./components/Sidebar/Sidebar"
import AppContextProvider from "./contexts/AppContext"
import ChannelSidebarContext from "./contexts/ChannelSidebarContext"

function App() {

  return (
    <AppContextProvider>
      <div className="app">
        <Sidebar />
        <div className="flex flex-1">
          <ChannelSidebarContext>
            <ChannelsSidebar />
            <Chat />
          </ChannelSidebarContext>
        </div>
      </div>
    </AppContextProvider>
  )
}

export default App
