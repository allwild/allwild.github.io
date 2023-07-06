import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/header";
import Home from "./components/home";
import About from "./components/about";
import Works from "./components/works";
import Contact from "./components/contact";
import Layout from "./components/layout";
import SinglePage from "./components/singlepage";

function App() {
  const [showSidebar, setShowSidebar] = useState(null);
  const tileData = [
    {
      title: "Art Gallery",
      url: "artgallery",
      deployed: "https://artworks-af2d9.web.app/",
      description:
        "A single page application that allows users to browse and purchase art. The users can save and like their favorite pieces. Google's OAuth2.0 is used for authentication. User data is stored in Google's Firestore. ",
      techStack: ["React", "Node.js", "Firebase", "Firestore"],
      github: "https://github.com/allwild/art-gallery",
      date: "2023 (in progress)",
      image: require("./pics/artgallery.png"),
    },
    {
      title: "NASA APOD",
      url: "nasa",
      deployed: "https://allwild.github.io/apod/",
      description:
        "The goal of this project was to create a web application that provides users with daily astronomy images and information sourced from NASA's Astronomy Picture of the Day (APOD) API. The application was built using vanilla JS and DOM manipulation. An additional feature is the full width image view. It allowed users to explore captivating images of the universe and learn about astronomical phenomena.",
      github: "https://github.com/allwild/apod",
      date: "2023 March",
      image: require("./pics/nasa.png"),
    },
    {
      title: "Digeridoo Shop",
      url: "digeridooshop",
      deployed: "https://allwild.github.io/dig-webshop",
      description:
        "As one of my early projects, I developed a webshop simulation called 'Digeridoo Shop.' It was designed to mimic a real-world e-commerce website, focusing on mastering the basics of positioning, layout, and DOM manipulation. The project extensively utilized vanilla JavaScript and CSS for creating a visually appealing and interactive user experience.",
      techStack: ["React", "Node.js", "Express", "MongoDB"],
      github: "https://github.com/allwild/dig-webshop",
      date: "2022 September",
      image: require("./pics/dig.png"),
    },
  ];

  const router = createBrowserRouter([
    {
      path: "/my_portfolio/",
      element: (
        <Layout showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      ),
      children: [
        {
          path: "/my_portfolio/",
          element: (
            <>
              <Home showSidebar={showSidebar} />
              <About />
              <Works tileData={tileData} />
              <Contact />
            </>
          ),
        },
        ...tileData.map((tile) => ({
          path: `/my_portfolio/${tile.url}`,
          element: <SinglePage details={tile} />,
        })),
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router}>
        <Header showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      </RouterProvider>
    </div>
  );
}

export default App;
