import { LoginProvider } from "./context/LoginContext"
import Login from "./pages/Login"
import { RoutesApp } from "./routes"
import { GlobalStyle } from "./styles/global"


function App() {

  return (
    <LoginProvider>
        <RoutesApp/>
        <GlobalStyle/>
    </LoginProvider>
  )
}

export default App
