import "./index.css";
import { BrowserRouter } from 'react-router-dom'
import ApplicationViews from "./components/ApplicationViews";
import Header from "./components/Header";

function App() {
 return (
<>
<BrowserRouter> 
  <Header/>
  <ApplicationViews/>
</BrowserRouter>
</>
)
}

export default App;