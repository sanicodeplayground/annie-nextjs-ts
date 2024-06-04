import BioExtended from "../../components/BioExtended";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Annie Booker - Illustrator and Natural History Enthusiast",
  description:
    "Discover the artistic journey of Annie Booker, an illustrator based in Bristol with a passion for natural history. Explore her unique mixed media illustrations, children's book designs, and award-winning artwork. Learn more about her professional background, artistic process, and recent projects. Connect with Annie for commissioned work or follow her on Instagram @anniebookerart.",
};

const AboutMe = () => {
  return <BioExtended />;
};

export default AboutMe;
