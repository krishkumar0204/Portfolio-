import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="min-h-[calc(100vh-6rem)] flex items-center justify-center px-4">
      <div className="w-full max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-indigo-300">
          404
        </p>
        <h1 className="mt-5 text-4xl font-bold text-white md:text-6xl">
          Page not found
        </h1>
        <p className="mx-auto mt-5 max-w-lg text-base font-medium text-gray-300 md:text-lg">
          The route you opened does not exist. Head back home or explore the
          projects page.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/"
            className="rounded-md bg-indigo-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-400"
          >
            Go Home
          </Link>
          <Link
            to="/projects"
            className="rounded-md border border-white/20 px-6 py-3 text-sm font-semibold text-gray-100 transition hover:border-indigo-300 hover:text-indigo-200"
          >
            View Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
