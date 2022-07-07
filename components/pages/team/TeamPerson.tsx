import Person from "@lib/types/Person";
import Image from "next/image";
import { Fragment } from "react";

interface TeamPersonProps {
  person: Person;
}
export default function TeamPerson(props: TeamPersonProps) {
  return (
    <div className="flex flex-col items-center bg-white bg-opacity-20 rounded-xl shadow-md p-5">
      <Image
        src={props.person.image}
        alt={props.person.name}
        height={250}
        width={250}
        className="object-center object-cover rounded-full"
        layout="fixed"
      />
      <h1 className="text-4xl mt-3 font-display font-bold">
        {props.person.name}
      </h1>
      <p className="text-xl text-center">
        {props.person.roles.map((r, i) =>
          i === props.person.roles.length - 1 ? (
            <Fragment key={i}>{r}</Fragment>
          ) : (
            <Fragment key={i}>{r}, </Fragment>
          )
        )}
      </p>
      {/* <p className="text-base text-left mt-3">{props.person.description}</p> */}
    </div>
  );
}
