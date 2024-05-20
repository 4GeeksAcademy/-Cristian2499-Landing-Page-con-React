import React from "react";
import Navbar from "./navbar";
import Jumbotron from "./Jumbotron";
import CardMain from "./CardMain";
import Footer from "./Footer";

//create your first component
const Home = () => {
  return (
    <div className="container">
      <Navbar />
      <Jumbotron />
      <div className="row mt-3">
        <div className="col-12 col-md-6 col-lg-3">
          <CardMain tittle="Scuderia Ferrari"
          description="Scuderia Ferrari is the sports division of Ferrari automobiles in charge of Formula 1 motor racing competitions."
          button="let's go!"
          image="https://i.pinimg.com/736x/7c/5b/d4/7c5bd49b63894587c6451d3279e73c2c.jpg" />
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <CardMain tittle="Aston Martin F1"
          description="A rebranding of the Racing Point F1 Team resulted in a return to Formula 1 as Aston Martin in 2021, using Mercedes engines."
          button="let's go!"
          image="https://cdn-9.motorsport.com/images/amp/6n9WqglY/s1000/aston-martin-f1-team-logo-1.jpg" />
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <CardMain tittle="Reb Bull Racing"
          description="It is a Formula One racing team, competing under Austrian license and based in the United Kingdom."
          button="let's go!"
          image="https://cdn-4.motorsport.com/images/mgl/Y99JQRbY/s8/red-bull-racing-logo-1.jpg" />
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <CardMain tittle="Mercedez F1"
          description="Mercedes-Benz is one of the most successful automakers in Formula 1, considered one of the four best performing teams."
          button="let's go!"
          image="https://seeklogo.com/images/M/mercedes-amg-f1-logo-1ED622D95E-seeklogo.com.png" />
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
