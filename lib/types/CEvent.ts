import { ReactNode } from "react";

type CEvent = {
  name: string;
  media: ReactNode;
  description: ReactNode;
  time?: string;
  type: "previous" | "upcoming";
};

export default CEvent;
