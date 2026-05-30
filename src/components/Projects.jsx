import "../index.css";
export default function Projects() {
  return (
    <>
      <section
        id="projects"
        className="max-w-3xl min-h-screen mx-auto px-4 py-16"
      >
        <div className="text-lg  text-neutral-200">
          <h2 className="flex items-center gap-4">
            <div className="flex flex-col items-center gap-1">
              <p className="h-2 w-2 bg-white rounded-full glow-dot"></p>
            </div>
            <span className="text-sm md:text-sm tracking-wide">
              MY PROJECTS
            </span>
          </h2>
          <p className="text-2xl mt-6 md:text-4xl font-semibold">
            Every project here represents a moment of
            <span className="italic font-normal text-indigo-400 pl-2">
              discovery,{" "}
            </span>{" "}
            where challenges sparked{" "}
            <span className="italic font-normal text-indigo-400 pl-2">
              innovative{" "}
            </span>{" "}
            solutions.
          </p>
        </div>

        <div className="mt-20 pt-10  rounded-2xl profile-frame box-shadow">
          <p className="ml-10 text-xl font-semibold">Campus Codex</p>
          <p className="text-xs ml-10 mt-1 text-neutral-100  ">
            Fronted + Backend{" "}
            <span className="text-xs text-neutral-400">
              — CampusCodex is a full-stack student notes platform for browsing,
              uploading, saving, and searching study notes.
            </span>
          </p>
          <a href="https://campus-codex-two.vercel.app/" target="_blank">
            <img
              src="/assets/CampusCodex.png"
              alt="India Explorer Overview"
              className="h-44 md:h-96 md:w-xl w-64 object-contain mx-auto mt-4 md:mt-0 shrink-0"
            />
          </a>
        </div>
      </section>
    </>
  );
}
