import './App.css'
import NavBar from './components/NavBar'
import Stat from './components/Stat'
import Hero from './components/hero'
import Navvar from './components/Navvar'
import PriceOptions from './components/PriceOption/PriceOptions'
import Linecharts from './components/graph/Linecharts'

function App() {
  

  return (
    <>
      
    <Navvar></Navvar>
    {/* <NavBar></NavBar> */}

    {/* <Hero></Hero>
    <Stat></Stat> */}
    <PriceOptions> </PriceOptions>
    <Linecharts></Linecharts>
    

     
    </>
  )
}

export default App
