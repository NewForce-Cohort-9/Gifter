import { Routes, Route, Navigate} from "react-router-dom";
import { PostList } from "./PostList";
import { PostForm } from "./PostForm";
import { PostDetails } from "./PostDetails";
import { UserPosts } from "./UserPosts";

const ApplicationViews = () => {

return (
     <Routes>
     
        <Route path="/" element= {<PostList />} />\

        <Route path="/users/:id" element= {<UserPosts />} />
        
        <Route path="/posts/add" element={<PostForm />} />
        
        <Route path="/posts/:id" element={<PostDetails/>} />
                
        <Route path="*" element={<p>Whoops, nothing here...</p>} />
     
     </Routes>
    
    )
  

};

export default ApplicationViews;

// 1. Add a new route in ApplicationViews whose path is users/:id and make a new component called UserPosts to go inside that route. If the url is /users/1, the app should only show the posts made by the user with the Id of 1