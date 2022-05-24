import { NextPage } from "next";

type Page<P = {}> = NextPage<P> & {
  title: string;
};

export default Page;
