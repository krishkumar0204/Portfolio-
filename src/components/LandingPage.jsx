import "../index.css";
export default function LandingPage() {
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 mt-32 lg:mt-30 mx-auto px-4 max-w-4xl">
        <img
          src="/src/assets/Profile_Pic.jpeg"
          alt="Profile_picture"
          className="h-64 lg:h-80 w-64 lg:w-auto object-cover rounded-3xl profile-frame shrink-0"
        />
        <div className="mt-6 lg:mt-14">
          <h2 className="font-bold text-3xl lg:text-4xl glowing-text">
            Krish Kumar
          </h2>
          <p className="font-semibold text-xs text-gray-200 opacity-50">
            Upcoming Software Engineer
          </p>
          <div className="flex items-center mt-2">
            <img src="/src/assets/pin.png" className="h-10 w-10" />
            <p className="font-semibold text-md text-neutral-200"> India</p>
          </div>
          <p className="mt-10 text-center text-xl md:mt-14 md:text-2xl font-semibold italic">
            "Turning <span className="text-indigo-500">thoughts</span> into
            code"
          </p>
        </div>
      </div>
      <div className="mt-20 text-center text-xl md:mt-40 md:w-4xl md:mx-auto">
        <p className="text-xl text-center md:text-4xl md:leading-3 font-semibold ">
          Creating solutions through code,
        </p>{" "}
        <p className="text-md md:text-3xl md:italic text-center md:mt-4">
          {" "}
          one <span className="text-indigo-500 font-semibold">pixel</span> at a
          time.
        </p>
      </div>
      <div className=" text-center text-xl mt-14 md:text-center md:mt-40">
        <h1 className="md:text-4xl font-semibold leading-3  glowing-text ">
          Tech Stack
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4 items-center justify-items-center mx-auto w-full max-w-5xl mt-16 md:mt-30">
          <div className="bg-transparent shadow-md shadow-[#ffffff33] h-20 w-20 flex items-center justify-center rounded-full hover:shadow-indigo-500 tech-glow">
            <img
              src="/assets/html_sdrsb6.png"
              className="h-14 w-14 relative tech-img"
            />
          </div>
          <div className="bg-transparent shadow-md shadow-[#ffffff33] h-20 w-20 flex items-center justify-center rounded-full hover:shadow-indigo-500 tech-glow">
            <img src="/assets/css_dypipp.png" className="tech-img" />
          </div>
          <div className="bg-transparent shadow-md shadow-[#ffffff33] h-20 w-20 flex items-center justify-center rounded-full hover:shadow-indigo-500 tech-glow">
            <img src="/assets/js_pdhqof.png" className="tech-img" />
          </div>

          <div className="bg-transparent shadow-md shadow-[#ffffff33] h-20 w-20 flex items-center justify-center rounded-full hover:shadow-indigo-500 tech-glow">
            <img src="/assets/node_pfe7fa.png" className="tech-img" />
          </div>
          <div className="bg-transparent shadow-md shadow-[#ffffff33] h-20 w-20 flex items-center justify-center rounded-full hover:shadow-indigo-500 tech-glow">
            <img src="/assets/react_mxcnqp.png" className="tech-img" />
          </div>
          <div className="bg-transparent shadow-md shadow-[#ffffff33] h-20 w-20 flex items-center justify-center rounded-full hover:shadow-indigo-500 tech-glow">
            <img src="/assets/express_qmb2no.png" className="tech-img" />
          </div>
          <div className="bg-transparent shadow-md shadow-[#ffffff33] h-20 w-20 flex items-center justify-center rounded-full hover:shadow-indigo-500 tech-glow">
            <img src="/assets/sql_d8is5k.png" className="tech-img" />
          </div>
          <div className="bg-transparent shadow-md shadow-[#ffffff33] h-20 w-20 flex items-center justify-center rounded-full hover:shadow-indigo-500 tech-glow">
            <img src="/assets/mongo_vjalgk.png" className="tech-img" />
          </div>
          <div className="bg-transparent shadow-md shadow-[#ffffff33] h-20 w-20 flex items-center justify-center rounded-full hover:shadow-indigo-500 tech-glow">
            <img src="/assets/java_qxlwq1.png" className="h-12 w-12 tech-img" />
          </div>

          <div className="bg-transparent shadow-md shadow-[#ffffff33] h-20 w-20 flex items-center justify-center rounded-full hover:shadow-indigo-500 tech-glow">
            <img src="/src/assets/python.png" className="h-8 w-8 tech-img" />
          </div>
        </div>
      </div>

      <div className="text-center mt-40">
        <p className="font-semibold text-2xl">
          Where <span className="italic font-light ">creativity</span> meets{" "}
          <span className="italic font-light">functionality</span>
        </p>
        <div className="flex items-center justify-around md:gap-40 w-xs mx-auto mt-14">
          <div className="flex flex-col">
            <h2 className="font-bold tracking-wider mb-3">EXPLORE</h2>
            <a
              href="/about"
              className="text-sm text-gray-200 font-semibold opacity-50 hover:opacity-100 cursor"
            >
              About
            </a>
            <a
              href="/projects"
              className="text-sm text-gray-200 font-semibold opacity-50 hover:opacity-100 cursor"
            >
              Projects
            </a>
            <a
              href="/Resume/Resume_Krish_Kumar.pdf"
              target="_blank"
              className="text-sm text-gray-200 font-semibold opacity-50 hover:opacity-100 cursor"
            >
              Resume
            </a>
          </div>
          <div className="flex flex-col mb-5">
            <h2 className="font-bold tracing-wider mb-3">SOCIALS</h2>
            <a
              href="https://www.linkedin.com/in/krishkumar0204/"
              className="text-sm text-gray-200 font-semibold opacity-50 hover:opacity-100 cursor"
              target="_blank"
            >
              Linkedin
            </a>
            <a
              href="https://github.com/krishkumar0204"
              target="_blank"
              className="text-sm text-gray-200 font-semibold opacity-50 hover:opacity-100 cursor"
            >
              Github
            </a>
          </div>
        </div>
      </div>

      <div className="text-center mt-40 pb-16">
        <h2 className=" text-4xl md:text-8xl md:tracking-wider w-full font-bold opacity-70">
          KRISH KUMAR
        </h2>
        <p className="text-sm text-gray-100 font-semibold opacity-70 mt-1.5 ">
          &copy;2025 All Rights Reserved
        </p>
      </div>
    </>
  );
}
