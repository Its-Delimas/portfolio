import {BrowserRouter, Routes,Route } from "react-router-dom";
import Home from './pages/Home/home.jsx';
import About from './pages/About/about.jsx';
import Skills from './pages/skills/skills.jsx';
import Projects from './pages/Projects/project.jsx';
import Blog from './pages/Blogs/blog.jsx';
import Contact from './pages/Contact/contact.jsx';

import Layout from './Layout/layout.jsx';



export default function App(){

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />}/>
                    <Route path="skills" element={<Skills />}/>
                    <Route path="projects" element={<Projects />}/>
                    <Route path="blog" element={<Blog />}/>
                    <Route path ="contact" element={<Contact />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
