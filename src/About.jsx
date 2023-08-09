import React from "react";
import web from "../src/images/img2.jpg";
import Common from "./Common";
import { NavLink } from "react-router-dom";
const About = () => {
    return(
        <>
        <Common name='About' imgsrc={web} visit="/contact" link="Contact Now" />
        </>
    );
};

export default About;