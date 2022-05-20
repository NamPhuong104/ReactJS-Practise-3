import React from "react";
import "./App.css";
//import Content from "./components/content/Content";
//import Header from "./components/header/Header";
//import Menu from "./components/menu/Menu";
import Article from "./components/article/Article";

// const ContentData = {
//   header: "The situation along the Belarussian border",
//   content: `On Tuesday, Moscow said it would "drastically reduce" military activity
//   near the Ukrainian cities of Kyiv and Chernihiv "to increase mutual
//   truse and create the necessary conditions for further negotiations."
//   This comes after Russian operations in this arera of Ukraine remain
//   stalled and Ukraine officials have claimed to have recaptured Makariv
//   and Irpin, two areas west of the capital city.`,
// };

// const Data = [
//   "Home",
//   "Polictics",
//   "Economics",
//   "Laws",
//   "Sports",
//   "Arts",
//   "Cultures",
//   "Food",
//   "Contact",
//   "About",
// ];

const articles = [
  {
    title: "Taliban order female TV presenters to cover faces",
    data: `Women's faces are banned from TV screens as Afghanistan's rulers further tighten restrictions.`,
    imgUrl: require("./images/img_1.jpg"),
  },
  {
    title: "Taliban order female TV presenters to cover faces",
    data: `Women's faces are banned from TV screens as Afghanistan's rulers further tighten restrictions.`,
    imgUrl: require("./images/img_2.jpg"),
  },
  {
    title: "Taliban order female TV presenters to cover faces",
    data: `Women's faces are banned from TV screens as Afghanistan's rulers further tighten restrictions.`,
    imgUrl: require("./images/img_3.jpg"),
  },
];

function App() {
  return (
    <>
      {/* <Header />
      <Menu data={Data} /> */}
      <Article articles={articles} />
      {/* <Content header={ContentData.header} content={ContentData.content} /> */}
    </>
  );
}

export default App;
