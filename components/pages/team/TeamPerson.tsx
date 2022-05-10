import Person from "@lib/types/Person";
import Image from "next/image";

interface TeamPersonProps {
  person: Person;
}
export default function TeamPerson(props: TeamPersonProps) {
  return (
    <div className="flex flex-col">
      <Image
        src={props.person.image}
        alt={props.person.name}
        height={200}
        width={200}
        className="object-center object-cover rounded-full"
        layout="fixed"
      />
      <h1>{props.person.name}</h1>
      <p>
        {props.person.roles.map((r, i) =>
          i === props.person.roles.length - 1 ? <>{r}</> : <>{r}, </>
        )}
      </p>
      <p>{props.person.description}</p>
    </div>
  );
}
