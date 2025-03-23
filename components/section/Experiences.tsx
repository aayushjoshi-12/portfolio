import { ExperienceComponent } from "../common/ExperienceComponent";
import { experiences } from "@/constants/experiences";

export const Experiences = () => {
  return (
    <div className="">
      <h2 className="text-3xl text-lightgray font-semibold pb-3">Experience</h2>
      <div className="grid gap-4">
        {experiences.map((experience, index) => (
          <ExperienceComponent experience={experience} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Experiences;