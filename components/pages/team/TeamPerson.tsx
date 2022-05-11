import Person from "@lib/types/Person";
import Image from "next/image";

interface TeamPersonProps {
  person: Person;
}
export default function TeamPerson(props: TeamPersonProps) {
  return (
    <div className="flex flex-col gap-3 items-center bg-white rounded-xl shadow-md p-5">
      <Image
        src={props.person.image}
        alt={props.person.name}
        height={250}
        width={250}
        className="object-center object-cover rounded-full"
        layout="fixed"
      />
      <h1 className="text-xl font-display font-bold">{props.person.name}</h1>
      <p>
        {props.person.roles.map((r, i) =>
          i === props.person.roles.length - 1 ? <>{r}</> : <>{r}, </>
        )}
      </p>
      <p>{props.person.description}</p>
    </div>
  );
}
