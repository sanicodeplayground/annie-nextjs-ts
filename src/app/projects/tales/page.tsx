import projects from "../../../data/ProjectsData";
import Link from "next/link";
import Image from "next/image";

const SingleProjectTales = () => {
  const currentProjectIndex = projects.findIndex(
    (project) => project.id === "tales-from-north"
  );

  // Calculate previous and next project indexes
  const previousProjectIndex =
    (currentProjectIndex - 1 + projects.length) % projects.length;
  const nextProjectIndex = (currentProjectIndex + 1) % projects.length;

  const previousProjectId = projects[previousProjectIndex].id;
  const nextProjectId = projects[nextProjectIndex].id;

  const items = [
    { src: "tales05.webp", class: "lg:col-span-2", alt: "The Fox Fires" },
    { src: "tales04.webp", class: "", alt: "The Fox Fires" },
    {
      class: "",
      h2: "The Fox Fires",
      p: "Adapted from a Finnish folk tale about the Northern Lights, The Fox Fires is a story about the creation of the aurora borealis and the power of kindness. While highlighting the plight of the arctic fox as a species, this tale focuses on the importance of empathy for nature and the endless rewards to be reaped from it.",
    },
    { src: "tales06.webp", class: "", alt: "The Fox Fires" },
    { src: "tales03.webp", class: "", alt: "The Fox Fires" },
    { src: "tales07.webp", class: "", alt: "The Fox Fires" },
    { src: "tales08.webp", class: "", alt: "The Fox Fires" },
    {
      class: "lg:col-span-2",
      h2: "The Caribou",
      p: "Originally sparked by my interest in the intricacies of the Arctic ecosystem, this piece explores the nature of caribou. It was further fuelled by the lawsuit against the 211-mile Ambler road construction, which sits in the middle of an important landmark for caribou migration. This visual narrative explores the importance of preserving the wilderness that is vital to these keystone species.",
    },
    { src: "tales09.webp", class: "lg:col-span-2", alt: "The Fox Fires" },
    { src: "tales10.webp", class: "", alt: "The Fox Fires" },
    { src: "tales12.webp", class: "", alt: "The Fox Fires" },
    { src: "tales13.webp", class: "", alt: "The Fox Fires" },
    { src: "tales11.webp", class: "", alt: "The Fox Fires" },
    { src: "tales15.webp", class: "lg:col-span-2", alt: "The Fox Fires" },
    { src: "tales16.webp", class: "", alt: "The Fox Fires" },
    { src: "tales17.webp", class: "", alt: "The Fox Fires" },
  ];

  return (
    <section className="container max-w-screen-xl p-4 mx-auto leading-loose">
      <h1 className="my-4 text-4xl font-extrabold">The Tales from The North</h1>
      <p>
        The Tales from The North is a collection of stories, inspired by the
        creatures that inhabit the North Pole and folk tales from the local
        area.
      </p>

      <ul className="grid grid-cols-1 py-8 gap-y-8 lg:grid lg:grid-cols-2 lg:gap-y-8 lg:gap-x-8 round-xl">
        {items.map((item, index) =>
          item.src ? (
            <li key={index} className={item.class}>
              <Image
                src={`../images/portfolio/tales/${item.src}`}
                alt={item.alt}
              />
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

export default SingleProjectTales;
