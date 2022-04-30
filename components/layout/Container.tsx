import Navbar from "@components/navbar/Navbar";
import { ReactNode } from "react";
import Meta from "./Meta";

interface ContainerProps {
  title: string;
  children: ReactNode;
}

export default function Container(props: ContainerProps) {
  return (
    <>
      <Meta title={props.title} />
      <Navbar />
      {props.children}
    </>
  );
}
