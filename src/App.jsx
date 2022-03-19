import React from 'react';
import "./index.css"
import { Header } from './components/Header';
import { InfoBox } from "./components/InfoBox";
import { Footer } from "./components/Footer";
import { PostList } from './components/PostList';

export const App = () => {
 return (
    <>
       <Header />
       <div className="content">
           <InfoBox />
           <PostList />
       </div>
       <Footer />
    </>
 );
};

// ₽