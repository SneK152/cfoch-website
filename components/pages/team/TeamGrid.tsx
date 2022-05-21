import { team } from "@lib/data/team";
import TeamPerson from "./TeamPerson";

export default function TeamGrid() {
  return (
    <div className="grid sm:grid-cols-3 grid-cols-1 sm:p-10 p-5 gap-5">
      {team.map((person) => (
        <TeamPerson key={person.name} person={person} />
      ))}
    </div>
  );
}
