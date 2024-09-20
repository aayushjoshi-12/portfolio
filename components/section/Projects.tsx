import ProjectComponent from "../common/ProjectComponent";
import { projects } from "@/constants/projects";

const Projects = () => {
  return (
    <div className='text-lightgray'>
      <h2 className="text-3xl font-semibold pb-3">Projects</h2>
      <div className="masonry-grid gap-4 font-mono text-sm">
        {projects.map((project, index) => (
          <ProjectComponent project={project} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Projects;