import "./index.css";
import { PostList } from "./components/PostList";
import { BrowserRouter } from 'react-router-dom'
import { PostForm } from "./components/PostForm";
import { Search } from "./components/Search";

function App() {
 return (
<>
<BrowserRouter> 
    <PostList />
    <PostForm/>
  </BrowserRouter>
</>
)
}

export default App;