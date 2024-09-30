"use client";
import { Typewriter } from "react-simple-typewriter";

export const Intro = () => {
  return (
    <div>
      <h1 className="text-white text-6xl font-semibold tracking-wide">
        Beka is a{" "}
        <strong className="text-primary">
          <Typewriter
            words={[
              "friendly co-worker",
              "hard working student",
              "software engineer",
            ]}
            cursor
            cursorStyle="_"
            typeSpeed={40}
            deleteSpeed={30}
            delaySpeed={1500}
          />
        </strong>
      </h1>
      <p className="text-secondary text-2xl mt-16">
        - He crafts software where technologies meet creativity and elegance.
      </p>
    </div>
  );
};
