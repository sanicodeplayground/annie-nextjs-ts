import Image from "next/image";
import Link from "next/link";
import { projects } from "../../../data/ProjectsData";
import { images } from "../../../data/NatureOfRinging";

const SingleProjectRinging = () => {
  const currentProjectIndex = projects.findIndex(
    (project) => project.id === "nature-of-ringing"
  );

  // Calculate previous and next project indexes
  const previousProjectIndex =
    (currentProjectIndex - 1 + projects.length) % projects.length;
  const nextProjectIndex = (currentProjectIndex + 1) % projects.length;

  const previousProjectId = projects[previousProjectIndex].id;
  const nextProjectId = projects[nextProjectIndex].id;

  return (
    <section className="container max-w-screen-xl p-4 mx-auto leading-loose">
      <h1 className="my-4 text-4xl font-extrabold">The Tales from The North</h1>
      <p>
        The Tales from The North is a collection of stories, inspired by the
        creatures that inhabit the North Pole and folk tales from the local
        area.
      </p>

      <ul className="grid grid-cols-1 py-8 gap-y-8 lg:grid lg:grid-cols-2 lg:gap-y-8 lg:gap-x-8 round-xl">
        {images.map((item, index) =>
          item.src ? (
            <li key={index} className={item.class}>
              <Image src={item.src} alt={item.alt} width={500} height={400} />
            </li>
          ) : (
            <li key={index} className={item.class}>
              <h2 className="mt-4 mb-2 text-2xl font-extrabold">{item.h2}</h2>
              <p>{item.p}</p>
            </li>
          )
        )}
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

export default SingleProjectRinging;
