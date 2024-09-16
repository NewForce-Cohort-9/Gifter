import { useState } from "react"
import { addPost } from "../services/PostService";


export const PostForm = () => {
const [newPost, setNewPost] = useState({}); 

const controlledInputChange = (e) => {
    const newstate = {...newPost}

    newstate[e.target.name] = e.target.value

    setNewPost(newstate)

}


    return(
        <div>
            <input type="text" placeholder="title" name="title" onChange={(e) =>controlledInputChange(e)}/>
            <input type="text" placeholder="imageUrl" name="imageUrl" onChange={(e) =>controlledInputChange(e)}/>
            <input type="text" placeholder="caption" name="caption" onChange={(e) =>controlledInputChange(e)}/>  
            <button onClick={() => addPost(newPost)}>Add Post</button>
        </div>
        )

}

