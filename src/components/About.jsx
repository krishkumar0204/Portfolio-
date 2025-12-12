import "../index.css";

export default function About() {
  return (
    <>
      <section
        id="about"
        className="max-w-3xl min-h-screen mx-auto px-4 py-16 overflow-x-hidden"
      >
        <div className="text-lg  text-neutral-200">
          <h2 className="flex items-center gap-4">
            <div className="flex flex-col items-center gap-1">
              <p className="h-2 w-2 bg-white rounded-full glow-dot"></p>
            </div>
            <span className="text-md md:text-sm tracking-wide">ABOUT ME</span>
          </h2>
          <p className="text-2xl mt-6 md:text-4xl font-semibold">
            I'm passionate about{" "}
            <span className="italic font-normal text-indigo-400">creating</span>{" "}
            beautiful{" "}
            <span className="italic font-normal text-indigo-400">products</span>{" "}
            that empower people.
          </p>
        </div>

        <div className="mt-20 md:flex">
          <div className="w-full md:max-w-sm">
            <img
              src="/assets/picture.jpeg"
              alt="glimpse_Of_myself"
              className="w-full md:w-64 lg:w-80 h-64 lg:h-96 object-cover rounded-3xl profile-frame shrink-0"
            />
            <p className="max-w-xs mt-8 ml-2 font-semibold text-md md:text-md text-white">
              My Journey in Bachelor of Computer Application
            </p>
            <p className="max-w-xs mt-4 ml-2 text-xs text-neutral-300">
              I will be soon graduating with a degree in Bachelor Of Computer
              Application from Magadh University.
            </p>
            <p className="max-w-xs mt-4 ml-2 text-xs text-neutral-300">
              Here, I discovered technology's true potential—not merely as tools
              or code but as a driving force capable of shaping how we live,
              connect, and evolve.
            </p>
          </div>
          <div className="mt-14">
            <p className="hidden md:block">
              This is my story — alongside some flicks from my college life.
            </p>
            <img
              src="/assets/College_memory.jpeg"
              className="hidden md:block w-full md:w-64 lg:w-80 h-64 lg:h-96 object-cover rounded-3xl profile-frame shrink-0 mt-20"
            />
          </div>
        </div>

        <div className="mt-20 md:flex md:gap-16 md:flex-row flex  flex-col">
          <img
            src="/assets/Full_Stack_Certifiacate.jpeg"
            alt="Full_Stack_Certificate"
            className="w-full md:w-64 lg:w-96 h-64 lg:h-96 object-cover rounded-3xl profile-frame shrink-0 mt-10"
          />
          <div>
            {" "}
            <p className="font-semibold text-xl md:text-md mt-10 md:mt-24 text-white">
              Certified Full Stack Developer
            </p>
            <p className="font-semibold  mt-6 md:text-xs text-neutral-300">
              Completed the Full Stack Development program at Apna College,
              specializing in the MERN stack and building multiple real-world
              projects from scratch.
            </p>
          </div>
        </div>

        <div className="mt-20 flex">
          <div className="w-full md:max-w-sm">
            <img
              src="/assets/HackSphere.jpeg"
              alt="glimpse_Of_myself"
              className="w-xl md:w-64 lg:w-80 h-64 lg:h-96 object-cover rounded-3xl profile-frame shrink-0"
            />
            <p className="w-xs mt-8 ml-2 font-semibold text-md md:text-md text-white">
              Empowering Lives With Technology.
            </p>
            <p className="w-xs mt-4 ml-2 text-xs text-neutral-300">
              Participated in a hackathon, collaborating with developers to
              build a functional prototype under a tight deadline.
            </p>
            <p className="w-xs mt-4 ml-2 text-xs text-neutral-300">
              Developed a working demo that showcased creativity, technical
              skills, and teamwork.
            </p>

            <p className="hidden md:block ml-2 mt-8 font-semibold">
              Thanks for stopping by!
            </p>
          </div>
          <div className="mt-14">
            <p className="hidden md:block">
              This is my story — Glimpse of Hackathon
            </p>
            <img
              src="/assets/HackHorizon.jpeg"
              className="hidden md:block w-full md:w-64 lg:w-80 h-64 lg:h-96 object-cover rounded-3xl profile-frame shrink-0 mt-20"
            />
          </div>
        </div>
        <p className="block md:hidden ml-2 mt-8 font-semibold">
          Thanks for stopping by!
        </p>
      </section>
    </>
  );
}
