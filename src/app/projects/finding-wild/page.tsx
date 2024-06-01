"use client";

import Image from "next/image";
import Link from "next/link";
import { projects } from "../../../data/ProjectsData";
import { images } from "../../../data/FindingWild";

const SingleProjectFinding = () => {
  const currentProject = projects.find(
    (project) => project.id === "finding-wild"
  );
  const currentProjectIndex = projects.findIndex(
    (project) => project.id === "finding-wild"
  );

  // Calculate previous and next project indexes
  const previousProjectIndex =
    (currentProjectIndex - 1 + projects.length) % projects.length;
  const nextProjectIndex = (currentProjectIndex + 1) % projects.length;

  const previousProjectId = projects[previousProjectIndex].id;
  const nextProjectId = projects[nextProjectIndex].id;

  return (
    <section className="container max-w-screen-xl p-4 mx-auto leading-loose">
      <h1 className="my-4 text-4xl font-extrabold">{currentProject?.title}</h1>
      <p>{currentProject?.description}</p>

      <ul className="grid grid-cols-1 py-8 gap-y-8 lg:grid-cols-2 lg:gap-y-8 lg:gap-x-8 round-xl">
        {images.map((image, index) => (
          <li key={index} className={image.class}>
            <Image src={image.src} alt={image.alt} width={1500} height={1000} />
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

export default SingleProjectFinding;
