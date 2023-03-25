import ChannelsSidebar from "./components/ChannelsSidebar/ChannelsSidebar"
import Sidebar from "./components/Sidebar/Sidebar"
import AppContextProvider from "./contexts/AppContext"
import ChannelSidebarContext from "./contexts/ChannelSidebarContext"

function App() {

  return (
    <AppContextProvider>
      <div className="app">
        <Sidebar />
        <div className="flex">
          <ChannelSidebarContext>
            <ChannelsSidebar />
          </ChannelSidebarContext>
        </div>
      </div>
    </AppContextProvider>
  )
}

export default App
