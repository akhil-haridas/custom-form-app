import React from "react";
import Head from "../../components/Home/Head";
import Section from "../../components/Home/Section";
const HomePage = () => {
  return (
    <div className="h-[100vh]">
      <Head active={"Home"} />
      <Section />
    </div>
  );
};

export default HomePage;
