import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";

import Home from "./components/Home";
import Blogs from "./components/Blogs";
import About from "./components/About";
import Contact from "./components/Contact";
import BlogPage from './components/BlogPages';

import Footer from './components/Footer';

export default function App() {
  return (
    <Router>
      <Navbar/>   {/* Navbar is always shown */}

      <div className="pt-20 px-4 sm:px-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:id" element={<BlogPage />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      <Footer/>
    </Router>
  );
}
