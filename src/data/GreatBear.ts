interface ProjectItem {
  src: string;
  class: string;
  alt: string;
}

interface ProjectTitleIn {
  title: string;
  intro: string;
}

export const projectTitle: ProjectTitleIn = {
  title: "The Great Bear",
  intro:
    "Originally an inuit tribe folk tale about the bear god Nanook, this story focuses on the relationship between man and bear. Rewritten for a contemporary audience, The Great Bear warns against invasive human action through the transformative path experienced by one fisherman. This tale is one of hope, proving that empathy for the world prevails and our actions can be redeemed.",
};

export const images: ProjectItem[] = [
  {
    src: "/images/portfolio/greatBear/great-bear01.webp",
    class: "col-span-2",
    alt: "The Great Bear main character",
  },
  {
    src: "/images/portfolio/greatBear/great-bear02.webp",
    class: "",
    alt: "The Great Bear main illustration",
  },
  {
    src: "/images/portfolio/greatBear/great-bear03.webp",
    class: "",
    alt: "The Great Bear, fish",
  },
  {
    src: "/images/portfolio/greatBear/great-bear04.webp",
    class: "",
    alt: "The Great Bear, with boat",
  },
  {
    src: "/images/portfolio/greatBear/great-bear05.webp",
    class: "",
    alt: "The Great Bear illustration",
  },
  {
    src: "/images/portfolio/greatBear/great-bear06.webp",
    class: "",
    alt: "The Great Bear book photo",
  },
  {
    src: "/images/portfolio/greatBear/great-bear07.webp",
    class: "",
    alt: "The Great Bear book photo",
  },
  {
    src: "/images/portfolio/greatBear/great-bear08.webp",
    class: "",
    alt: "The Great Bear book photo",
  },
  {
    src: "/images/portfolio/greatBear/great-bear09.webp",
    class: "",
    alt: "The Great Bear book photo",
  },
];
