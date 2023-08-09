import React from "react";
import web from "../src/images/imgg.jpg"
import Common from "./Common";

const Home = () => {
    return(
        <>
        <Common name='Home' imgsrc={web} visit="/about" link="About Page" />
        </>
    );
};

export default Home;