import Building from './sections/Building.jsx'
import Components from './sections/Components.jsx'
import Customization from './sections/Customization.jsx'
import Footer from './sections/Footer.jsx'
import GetStarted from './sections/GetStarted.jsx'
import Header from './sections/Header.jsx'
import JQuery from './sections/JQuery.jsx'
import Main from './sections/Main.jsx'
import Personalization from './sections/Personalization.jsx'
import Themes from './sections/Themes.jsx'

function App() {
  return (
    <div className="bg-[#202529]/95 text-white">
      <Header/>
      <Main/>
      <GetStarted/>
      <Customization/>
      <Building/>
      <Components/>
      <JQuery/>
      <Personalization/>
      <Themes/>
      <Footer/>
    </div>
  )
}

export default App
