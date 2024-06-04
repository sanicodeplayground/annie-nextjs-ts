import ClientComponent from "./ClientComponent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Illustrations of 'The Nature of Ringing' by Annie Booker",
  description: "Explore 'The Nature of Ringing' illustrated by Annie Booker. ",
};

const page = () => {
  return <ClientComponent />;
};

export default page;
