import React from "react";
import CardList from "./components/app/cardList";
import Layout from "./components/common/layout";
import "./styles/index.css";

const App = () => {
  return (
    <Layout>
      <main className="
      container
      min-w-sm
      mx-auto">
        <CardList/>
      </main>
    </Layout>
  );
};

export default App;
