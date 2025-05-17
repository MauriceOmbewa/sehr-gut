import React from "react";
// import ReactDOM from "react-dom/client";
import './index.css';
import Header from './components/header';

export default function App() {
  console.log("App is rendering");
  return(
    <div>

      <Header />
      <section id="home">
        <h1>Welcome to SehrGut</h1>
        <p>SehrGut is your go-to platform for exploring modern web development with React. Our mission is to provide both aspiring and experienced developers with the tools, knowledge, and inspiration needed to build innovative, scalable, and user-friendly web applications. Whether you’re just starting your journey in tech or looking to sharpen your skills, SehrGut offers a welcoming environment filled with resources and guidance.</p>
        <p>As you explore this site, you’ll find helpful guides, real-world project examples, and best practices for using React in various scenarios. We believe that learning should be interactive and enjoyable, so we’ve designed our platform to be easy to navigate and full of valuable insights. Click on the links above to learn more about our team, read articles on trending tech topics, and dive into the world of modern frontend development. Don’t hesitate to reach out or share your own experiences with us—we’re all about learning together.</p>
        <p>We also encourage you to explore each section thoroughly, as we’re constantly updating the content to reflect the latest industry trends and updates. Whether you’re looking to learn about components, hooks, state management, or even deployment strategies, SehrGut is here to support your development journey every step of the way.</p>
      </section>

      <section id="about">
        <h1>About Us</h1>
        <p>We are a team of dedicated developers who are passionate about building meaningful web experiences. Each of us brings a unique set of skills and backgrounds to the table, allowing us to collaborate effectively and produce high-quality applications that solve real problems. Our team is made up of frontend specialists, backend engineers, UI/UX designers, and content creators who work together to deliver tools that make a difference in the developer community.</p>
        <p>Our love for technology, particularly React, comes from its component-based architecture and its ability to power interactive and responsive user interfaces. We've built countless projects ranging from simple personal portfolios to complex dashboards and enterprise applications. Through SehrGut, we hope to share the lessons we've learned, the mistakes we've made, and the victories we've celebrated, all in an effort to help others grow.</p>
        <p>Beyond just code, we’re also passionate about mentorship, open-source contributions, and building a positive, inclusive tech community. Our aim is to support learners from all walks of life and help them reach their full potential. We strongly believe in continuous learning and strive to stay updated with the latest tools and frameworks so that we can always deliver the best possible experience for our users.</p>
      </section>

      <section id="articles">
        <h1>Articles</h1>
        <p>Welcome to our articles section! Here you’ll find a collection of thoughtfully written blog posts and tutorials covering a wide range of web development topics. Whether you’re curious about how to use useEffect correctly, interested in setting up your first CI/CD pipeline, or exploring the latest updates in the React ecosystem, we have something for you. Each article is carefully researched and written to be beginner-friendly, yet detailed enough to benefit advanced users as well.</p>
        <p>We believe that sharing knowledge is one of the most powerful ways to strengthen the tech community. That’s why our team dedicates time to writing clear, concise, and valuable content that reflects real-world scenarios. Our articles are based on actual problems we've solved and lessons we've learned in our professional projects, so you can be confident you're reading practical, actionable advice.</p>
        <p>Stay tuned as we continue to publish new articles on topics like state management with Redux, integrating TypeScript into React projects, handling form validation, implementing authentication and authorization, performance optimization, and much more. If you have suggestions or want to contribute your own article, we’d love to hear from you—SehrGut is built by the community, for the community.</p>
      </section>
      <section id="contacts">
        You can reach us at:
        
        twitter: @sehrgut
        instagram: @sehrgut
      </section>
    </div>
  );
}
