import logo from "./img/logo-anderson.png"
import Logo from "./components/Logo"
import Calculador from "./components/Calculator"

function App() {
  return (
    <div className="App">
      <Logo logo={logo} />
      <Calculador />
    </div>
  )
}

export default App
