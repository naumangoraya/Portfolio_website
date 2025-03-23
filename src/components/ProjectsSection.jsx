import { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import ProjectCard from "./ProjectCard";

function ProjectsSection({ projects = [], updateProjectOrder }) {
  const [projectsList, setProjectsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (projects && projects.length > 0) {
      setProjectsList(projects);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  }, [projects]);

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(projectsList);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setProjectsList(items);
    if (updateProjectOrder) {
      updateProjectOrder(items);
    }
  };

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-gray-100 to-white dark:from-gray-800 dark:to-gray-900"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent neon-text">
          My Projects
        </h2>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
          </div>
        ) : projectsList.length === 0 ? (
          <div className="text-center text-gray-500 dark:text-gray-400 p-10 frosted-glass rounded-xl">
            <p className="text-xl">No projects available</p>
            <p className="mt-2">Add some projects to showcase your work!</p>
          </div>
        ) : (
          <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="projects">
              {(provided) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                  {projectsList.map((project, index) => (
                    <Draggable
                      key={index}
                      draggableId={`project-${index}`}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="transform transition-all duration-300 hover:scale-105"
                        >
                          <ProjectCard
                            title={project.title}
                            description={project.description}
                            image={project.image}
                            githubLink={project.githubLink}
                          />
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        )}

        <div className="text-center mt-8 text-sm text-gray-500 dark:text-gray-400">
          <p>Drag and drop to reorder projects</p>
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
