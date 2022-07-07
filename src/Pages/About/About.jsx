import React from "react";
import me from "../../assets/images/rd-172kb.jpg";

const About = () => {
  return (
    <div className="w-50 mx-auto">
      <img className="w-75 mx-auto" src={me} alt="" />
      <h1>Rocky Das</h1>
      <p>
        Here are (my goals) what i have planned to achieve this year Let's
        start:
        <br /> <br /> I want to become a freelance/remote website/app developer.
        I absolutely Love the routine life and other things related to a 9-5
        job.
        <br /> <br />
        Currently I'm working on revising my JavaScript skills. I have worked
        with HTML and CSS for about 1 and half years. Now I want to work on
        JavaScript more as there are better growth opportunities.
        <br /> <br />
        Planning on doing a certification in MERN stack so I can get into full
        stack development which I believe is going to be a great career choice
        for the future.
      </p>
    </div>
  );
};

export default About;
