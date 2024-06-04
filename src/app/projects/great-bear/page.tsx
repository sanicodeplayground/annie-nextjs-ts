import ClientComponent from "./ClientComponent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Illustrations of 'The Great Bear' by Annie Booker",
  description:
    "Explore 'The Great Bear', illustrated by Annie Booker. This modern retelling of the Inuit tribe folk tale about the bear god Nanook features a series of stunning mixed media illustrations. Annie's artwork captures the transformative journey of a fisherman and highlights the consequences of invasive human actions. Discover her unique artistic style through full-width pieces and detailed vignettes that bring this compelling narrative to life, emphasising hope and redemption.",
};

const page = () => {
  return <ClientComponent />;
};

export default page;
