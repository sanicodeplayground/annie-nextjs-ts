import projects from "../data/ProjectsData";
import Link from "next/link";

function Projects() {
  return (
    <section>
      <h2 className="items-center max-w-screen-xl gap-16 px-4 py-8 mx-auto mb-4 text-4xl font-extrabold lg:grid lg:grid-cols-2 lg:py-16 lg:px-6 text-custom-primary">
        Recent Projects
      </h2>

      {/* projects grid */}
      <ul className="grid sm:max-w-[52.5rem] px-4 grid-cols-1 sm:grid-cols-2  mx-auto gap-6 lg:gap-y-8 xl:gap-x-8 lg:px-8 lg:max-w-6xl pb-20">
        {projects.map((project) => (
          <li key={project.id}>
            <Link href={`/projects/${project.id}`}>
              <div className="w-full overflow-hidden">
                <img
                  src={project.src}
                  alt={project.title}
                  className="object-cover w-full mb-2 transition duration-1000 ease-in-out hover:scale-105 bg-slate-300"
                />
              </div>
              <h3 className="font-semibold text-custom-primary md:text-xl">
                {project.description}
              </h3>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Projects;
