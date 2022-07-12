import React from "react";
import CardList from "./components/app/cardList";
import Layout from "./components/common/layout";
import "./styles/index.css";

const App = () => {
  return (
    <Layout>
      <main>
        <CardList/>
      </main>
    </Layout>
  );
};

export default App;
