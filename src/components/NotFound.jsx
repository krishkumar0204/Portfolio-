import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";

export default function NotFound() {
  return (
    <section className="min-h-[calc(100vh-8rem)] px-4 py-10 md:py-16">
      <div className="mx-auto grid w-full max-w-5xl items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <div className="flex items-center gap-4 text-neutral-200">
            <span className="h-2 w-2 rounded-full bg-white glow-dot"></span>
            <span className="text-sm font-semibold uppercase tracking-[0.35em]">
              Route missing
            </span>
          </div>

          <h1 className="mt-8 text-7xl font-black leading-none text-white md:text-9xl">
            404
          </h1>
          <p className="mt-5 max-w-xl text-3xl font-semibold text-white md:text-5xl">
            This page drifted outside the portfolio.
          </p>
          <p className="mt-5 max-w-lg text-sm font-medium leading-7 text-neutral-300 md:text-base">
            The link may be outdated, moved, or typed a little differently. Jump
            back into the main experience from here.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-950/30 transition hover:bg-indigo-400"
            >
              <HomeOutlinedIcon fontSize="small" />
              Home
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 px-6 py-3 text-sm font-semibold text-gray-100 transition hover:border-teal-200 hover:text-teal-100"
            >
              <WorkOutlineIcon fontSize="small" />
              Projects
            </Link>
          </div>
        </div>

        <div className="profile-frame rounded-2xl border border-teal-200/30 bg-black/10 p-6 shadow-2xl backdrop-blur-sm">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-teal-100">
              Navigation
            </p>
            <p className="text-xs font-semibold text-neutral-400">404</p>
          </div>

          <div className="mt-6 space-y-4">
            <Link
              to="/about"
              className="group flex items-center justify-between rounded-lg border border-white/10 px-4 py-4 text-left transition hover:border-indigo-300/60 hover:bg-white/5"
            >
              <span>
                <span className="block text-sm font-semibold text-white">
                  About me
                </span>
                <span className="mt-1 block text-xs text-neutral-400">
                  Read the story behind the work.
                </span>
              </span>
              <ArrowForwardIcon
                fontSize="small"
                className="text-neutral-400 transition group-hover:translate-x-1 group-hover:text-indigo-200"
              />
            </Link>

            <Link
              to="/projects"
              className="group flex items-center justify-between rounded-lg border border-white/10 px-4 py-4 text-left transition hover:border-teal-200/60 hover:bg-white/5"
            >
              <span>
                <span className="block text-sm font-semibold text-white">
                  Featured project
                </span>
                <span className="mt-1 block text-xs text-neutral-400">
                  Open Campus Codex and recent builds.
                </span>
              </span>
              <ArrowForwardIcon
                fontSize="small"
                className="text-neutral-400 transition group-hover:translate-x-1 group-hover:text-teal-100"
              />
            </Link>
          </div>

          <p className="mt-6 text-xs font-medium leading-6 text-neutral-400">
            Error code: page-not-found. Suggested path: return to a working
            route and keep exploring.
          </p>
        </div>
      </div>
    </section>
  );
}
