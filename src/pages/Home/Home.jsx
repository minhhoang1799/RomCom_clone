import React from "react";

import "./Home.scss";
import Banner from "./features/Banner/Banner";
import Section01 from "./features/Section01/Section01";
import Section02 from "./features/Section02/Section02";

function Home() {
  return (
    <main>
      <Banner></Banner>
      <Section01></Section01>
      <Section02></Section02>
    </main>
  );
}

export default Home;
