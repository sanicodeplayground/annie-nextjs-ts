import Image from "next/image";
import Link from "next/link";
import { projects } from "../../../data/ProjectsData";
import { projectTitle, images } from "../../../data/GreatBear";

const greatBear = () => {
  const currentProject = projects.find(
    (project) => project.id === "great-bear"
  );

  const currentProjectIndex = projects.findIndex(
    (project) => project.id === "great-bear"
  );

  // Calculate previous and next project indexes
  const previousProjectIndex =
    (currentProjectIndex - 1 + projects.length) % projects.length;
  const nextProjectIndex = (currentProjectIndex + 1) % projects.length;

  const previousProjectId = projects[previousProjectIndex].id;
  const nextProjectId = projects[nextProjectIndex].id;

  return (
    <section className="container max-w-screen-xl p-4 mx-auto leading-loose">
      <h1 className="mb-4 text-4xl font-extrabold">{currentProject?.title}</h1>
      <p>{currentProject?.description}</p>

      <ul className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:gap-y-8 lg:gap-x-8 round-xl py-8">
        {images.map((img, index) => (
          <li key={index} className={img.class}>
            <Image src={img.src} alt={img.alt} width={1500} height={1000} />
          </li>
        ))}
      </ul>
      {/* Navigation */}
      <div className="flex justify-center gap-8 py-12">
        <Link href={`/projects/${previousProjectId}`}>
          <p className="hover:text-custom-hover">&larr; Previous </p>
        </Link>
        <Link href={`/projects/${nextProjectId}`}>
          <p className="hover:text-custom-hover">Next &rarr;</p>
        </Link>
      </div>
    </section>
  );
};

export default greatBear;
