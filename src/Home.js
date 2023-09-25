import { useState,useEffect } from "react";
import BlogList from "./BlogList";
const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'My new websites', body: 'lorem ipsum...', author: 'mario',id: 1 },
        {title: 'My new party!', body: 'lorem ipsum...', author: 'mario',id: 2 },
        {title: 'My new devops tips', body: 'lorem ipsum...', author: 'mario',id: 3 }
    ]);

    const [name, setName] = useState('agi');

    const handleDelete = (id) =>{
        const newBlogs = blogs.filter(blog => blog.id !== id );
        setBlogs(newBlogs);
    }

    useEffect(()=>{
        console.log('use effect ran');
        console.log(name);
    },[name]);

    return ( 
        <div className="home">
           <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>
           <button onClick={() => setName('jsx')}>Change name</button>
           <p>{name}</p>
        </div>
     );
    }
   


export default Home;