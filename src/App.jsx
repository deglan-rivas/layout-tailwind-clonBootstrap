import Building from './sections/Building.jsx'
import Components from './sections/Components.jsx'
import Customization from './sections/Customization.jsx'
import GetStarted from './sections/GetStarted.jsx'
import Header from './sections/Header.jsx'
import Main from './sections/Main.jsx'

function App() {
  return (
    <div className="bg-[#202529]/95 text-white">
      <Header/>
      <Main/>
      <GetStarted/>
      <Customization/>
      <Building/>
      <Components/>
    </div>
  )
}

export default App
