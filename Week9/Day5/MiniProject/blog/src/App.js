import {image} from './Home.js';
import './App.css';
import {post} from './components/About.js';
import {Header} from './components/Navbar.js';
import {Blog} from './components/Post.js';
import { Router } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import post from './components/About.js';
import blogPost from './components/Contact.js';

const App=()=> {
  return(
   <div className='App'>
   <Header/>
    <h1>Home</h1>
<div>
<Blog/>
<post/>
<blogPost/>
   </div>
   </div>
  );
  
};

export default App;
