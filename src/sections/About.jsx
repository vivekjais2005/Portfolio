import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/FrameWorks";

const About = () => {
  const grid2Container = useRef();

  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        
        {/* ✅ Grid 1 - Professional Summary */}
        <div className="relative flex items-end justify-start grid-default-color grid-1 rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-[#001f3f]" />
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-800/40 to-transparent" />
          <div className="relative z-10 p-6 md:p-8 text-white">
            <h3 className="text-2xl font-bold mb-3">Professional Summary</h3>
            <p className="text-gray-100 leading-relaxed mb-2">
              I’m <span className="font-semibold text-white">Vivek Jaiswal</span>, a{" "}
              <span className="font-semibold text-blue-300">Full Stack Developer</span> pursuing
              B.Tech in Computer Science & Engineering at{" "}
              <span className="font-semibold text-blue-300">Jaypee University Anoopshahr</span>.
            </p>
            <p className="text-gray-100 leading-relaxed mb-2">
              I currently intern at <span className="font-semibold text-blue-300">Alfido Tech</span> and
              lead my venture <span className="font-semibold text-blue-300">Handaura</span>, where I
              connect India’s handmade craft communities through technology.
            </p>
            <p className="text-gray-100 leading-relaxed mb-2">
              Skilled in React.js, Node.js, Express.js, and MongoDB — I focus on building scalable,
              secure, and elegant digital experiences with clean UI/UX.
            </p>
            <p className="text-gray-100 leading-relaxed">
              I believe in merging creativity with code to transform ideas into reality.
            </p>
          </div>
        </div>

        {/* ✅ Grid 2 - Orbit Section (Now readable) */}
        <div className="relative grid-default-color grid-2 overflow-hidden rounded-3xl">
          {/* Background layers for contrast */}
          <div className="absolute inset-0 bg-[#0a1a3a]" />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-700/60 via-blue-800/40 to-transparent opacity-90" />

          <div
            ref={grid2Container}
            className="relative flex items-center justify-center w-full h-full"
          >
            {/* Center heading */}
            <p className="absolute text-4xl md:text-5xl font-bold text-white opacity-80 select-none z-0 drop-shadow-lg">
              BE CONSISTENT
            </p>

            {/* Static, well-spaced Cards */}
            <Card
              style={{ rotate: "25deg", top: "15%", left: "15%" }}
              text="MongoDB"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-25deg", top: "65%", left: "35%" }}
              text="Enthusiastic"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "15deg", bottom: "25%", left: "65%" }}
              text="FullStack Dev"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "55%", left: "5%" }}
              text="Passionate"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "10deg", top: "10%", left: "38%" }}
              text="DSA"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "30deg", top: "20%", left: "70%" }}
              image="assets/logos/css3.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-40deg", top: "70%", left: "25%" }}
              image="assets/logos/html5.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-20deg", top: "5%", left: "10%" }}
              image="assets/logos/javascript.svg"
              containerRef={grid2Container}
            />
          </div>
        </div>

        {/* ✅ Grid 3 - Globe */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Time Zone</p>
            <p className="subtext">
              I'm based in Mars, and open to remote work worldwide.
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>

        {/* ✅ Grid 4 - Contact */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Do you want to start a project together?
            </p>
            <CopyEmailButton />
          </div>
        </div>

        {/* ✅ Grid 5 - Tech Stack */}
        <div className="relative grid-default-color grid-5 overflow-hidden rounded-3xl">
          <div className="relative z-10 w-[55%] p-6">
            <p className="headText">Tech Stack</p>
            <p className="subtext">
              I specialize in a variety of languages, frameworks, and tools that
              allow me to build robust and scalable applications.
            </p>
          </div>

          {/* Static frameworks in bottom-right corner */}
          <div className="absolute bottom-6 right-6 scale-110 opacity-90">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
