import Sidebar from "./components/Sidebar/Sidebar"
import AppContextProvider from "./contexts/AppContext"

function App() {

  return (
    <AppContextProvider>
      <div className="app">
        <Sidebar />
      </div>
    </AppContextProvider>
  )
}

export default App
