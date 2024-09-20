interface ExperienceComponentProps {
    title: string;
    company: string;
    description: string;  
    date: string;
    location: string;
};

export const ExperienceComponent = ({ experience }:{ experience: ExperienceComponentProps }) => {
  return (
    <div className="border rounded-lg border-mutedgray p-3">
      <div className="grid grid-cols-2 ">
        <h3 className="text-xl text-lightgray font-semibold">{experience.title}</h3>
        <p className="text-lg text-halfgray text-right">{experience.company}</p>
        <p className="text-sm text-halfgray">{experience.location}</p>
        <p className="text-sm text-halfgray text-right">{experience.date}</p>
      </div>
      <p className="text-sm text-halfgray pt-2 font-mono">{experience.description}</p>
    </div>
  );
}