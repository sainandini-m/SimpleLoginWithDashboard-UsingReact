import React, {useState, useEffect} from 'react';
import axios from 'axios';
import '../css/post.css';
import FooterComp from './footer.component';


export default function PostComp(){ 
    const [posts, setPosts] = useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            console.log(res);
            setPosts(res.data)
        })
        .catch(error => {
            console.log(error);
        })
    },[])
    
return   <React.Fragment>
     <div className="posts"> 
         <div>
            <table className="content-table" >
                <thead>
                    <tr>
                        <td>S.No.</td>
                        <td>Title</td>
                        <td>Posts</td>
                    </tr>
                </thead>
                <tbody>
                    {posts.map((post)=>
                            <tr key={post.id}>
                                <td>{post.id}</td>
                                <td>{post.title}</td>
                                <td>{post.body}</td>
                            </tr>
                    )}  
                </tbody>
            </table>
        </div></div>
        <div className="footer">
            <FooterComp/>
        </div> 
    
    </React.Fragment>
}


