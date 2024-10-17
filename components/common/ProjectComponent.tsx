import { IconLink } from '@tabler/icons-react';

interface ProjectDescProps {
  title: string;
  description: string;
  link: string;
  techStack: string[];
}

const ProjectComponent = ({ project }: { project: ProjectDescProps; key: number }) => {
  return (
    <div className="masonry-item grid grid-cols-1">
      <div className="p-4 border border-mutedgray rounded-lg">
        <div className="flex justify-between">
          <h3 className="text-xl font-semibold pb-2">
            {project.title}
          </h3>
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex text-halfgray hover:text-lightgray">
            <IconLink stroke={1} />
          </a>
        </div>
        <p className="text-halfgray mb-4">{project.description}</p>
        <div className="flex flex-wrap text-xs gap-1">
          {project.techStack && project.techStack.map((tech: string, index: number) => (
            <p
              key={index}
              className="text-mutedgray px-2 py-1 rounded-2xl inline-block border border-mutedgray"
            >
              {tech}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectComponent;