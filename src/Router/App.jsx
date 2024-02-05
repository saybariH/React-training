import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Pages/Layout";
import Blogs from "./Pages/Blogs";
import Contact from "./Pages/Contact";
import HomePage from "./Pages/HomePage";
import PageNotFound from "./Pages/PageNotFound";

export default function App(){
    return (
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Layout/>}>

        <Route index element={<HomePage/>}></Route>
        <Route path="blogs" element={<Blogs/>}></Route>
        <Route path="contact" element={<Contact/>}></Route>
        <Route path="*" element={<PageNotFound/>}></Route>
        </Route>
        </Routes>
        </BrowserRouter>
    );
}