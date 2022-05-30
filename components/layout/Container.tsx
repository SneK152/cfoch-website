import Navbar from "@components/navbar/Navbar";
import { ReactNode } from "react";
import Footer from "./Footer";
import Meta from "./Meta";

interface ContainerProps {
  title: string;
  children: ReactNode;
}

export default function Container(props: ContainerProps) {
  return (
    <>
      <Navbar />
      <div className="bg-lightgreen h-16"></div>
      <Meta title={props.title} />
      <div className="bg-light">{props.children}</div>
      <Footer />
    </>
  );
}
