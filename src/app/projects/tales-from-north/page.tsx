import ClientComponent from "./ClientComponent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Illustrations of 'Tales from North' by Annie Booker",
  description: "Explore 'Tales from North' illustrated by Annie Booker.",
};

const page = () => {
  return <ClientComponent />;
};

export default page;
