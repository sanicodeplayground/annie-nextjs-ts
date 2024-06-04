import ClientComponent from "./ClientComponent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Illustrations of 'Finding The Wild' by Annie Booker",
  description:
    "Explore Annie Booker's 'Finding The Wild' portfolio, showcasing a series of mixed media illustrations. This collection features diverse artwork including book covers and detailed illustrations, highlighting Annie's unique artistic style and dedication to natural history. Discover the full breadth of her work, with images ranging from full-width pieces to detailed vignettes, all encapsulating the essence of 'Finding The Wild'.",
};

const page = () => {
  return <ClientComponent />;
};

export default page;
