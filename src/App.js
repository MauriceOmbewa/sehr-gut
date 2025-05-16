import React from "react";
// import ReactDOM from "react-dom/client";
import './index.css';
import Header from './components/header';

export default function App() {
  console.log("🏗️ App is rendering");
  return(
    <div>

      <Header />
      <section id="home">
        <h1>Welcome to SehrGut</h1>
        <p>This is a simple React application.</p>
        <p>Click on the links above to navigate.</p>
      </section>
      <section id="about">
        <h1>About Us</h1>
        <p>We are a team of passionate developers.</p>
        <p>We love creating web applications using React.</p>
      </section>
      <section id="articles">
        <h1>Articles</h1>
        <p>Here are some articles we have written.</p>
        <p>Stay tuned for more updates!</p>
      </section>
      <section id="contacts">
        You can reach us at:
        
        twitter: @sehrgut
        instagram: @sehrgut
      </section>
    </div>
  );
}
