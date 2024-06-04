"use client";
import Image from "next/image";
import Link from "next/link";
import { projects } from "../../../data/ProjectsData";
import { images } from "../../../data/NatureOfRinging";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const SingleProjectRinging = () => {
  const currentProject = projects.find(
    (project) => project.id === "nature-of-ringing"
  );

  const currentProjectIndex = projects.findIndex(
    (project) => project.id === "nature-of-ringing"
  );

  // Calculate previous and next project indexes
  const previousProjectIndex =
    (currentProjectIndex - 1 + projects.length) % projects.length;
  const nextProjectIndex = (currentProjectIndex + 1) % projects.length;

  const previousProjectId = projects[previousProjectIndex].id;
  const nextProjectId = projects[nextProjectIndex].id;

  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setIsOpen(true);
  };
  return (
    <section className="container max-w-screen-xl p-4 mx-auto leading-loose">
      <h1 className="my-4 text-4xl font-extrabold">{currentProject?.title}</h1>
      <p>{currentProject?.description}</p>

      <ul className="grid grid-cols-1 py-8 gap-y-8 lg:grid-cols-2 lg:gap-y-8 lg:gap-x-8 round-xl">
        {images.map((img, index) => (
          <li
            key={index}
            className={img.fullWidth ? "col-span-2" : ""}
            onClick={() => openLightbox(index)}
            style={{ cursor: "pointer" }}
          >
            <Image src={img.src} alt={img.alt} width={1500} height={1000} />
          </li>
        ))}
      </ul>
      {isOpen && (
        <Lightbox
          open={isOpen}
          close={() => setIsOpen(false)}
          slides={images.map((img) => ({ src: img.src, alt: img.alt }))}
          index={currentImageIndex}
          on={{ view: ({ index }) => setCurrentImageIndex(index) }}
        />
      )}
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
