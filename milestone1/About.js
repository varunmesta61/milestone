import React from "react";
import AboutImg from "../assets/images/about-img";
const About = () => {
  return (
    <>
      <section className="about" id="about">
        <h1 className="heading">
          <span>about</span> us
        </h1>

        <div className="row">
          <div className="image">
            <img src={AboutImg} alt="" />
          </div>

          <div className="content">
            <h3>what makes our food special?</h3>
            <p>
            Local and seasonal ingredients contribute to the uniqueness of a dish. For example, a mango dessert in India during the summer tastes special because of the richness of the fruit grown in the region.
            </p>
            <p>
            Food reflects the traditions and history of a community or region. Recipes passed down through generations carry cultural significance and often tell a story about the people who created them.
            </p>
            <a href="#" className="btn">
              learn more
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
