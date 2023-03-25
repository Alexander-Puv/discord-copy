import ChannelsSidebar from "./components/ChannelsSidebar/ChannelsSidebar"
import Sidebar from "./components/Sidebar/Sidebar"
import AppContextProvider from "./contexts/AppContext"

function App() {

  return (
    <AppContextProvider>
      <div className="app">
        <Sidebar />
        <div className="flex">
          <ChannelsSidebar />
        </div>
      </div>
    </AppContextProvider>
  )
}

export default App
