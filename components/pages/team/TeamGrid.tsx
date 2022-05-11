import { team } from "@lib/data/team";
import TeamPerson from "./TeamPerson";

export default function TeamGrid() {
  return (
    <div className="grid grid-cols-3 gap-5">
      {team.map((person) => (
        <TeamPerson key={person.name} person={person} />
      ))}
    </div>
  );
}
