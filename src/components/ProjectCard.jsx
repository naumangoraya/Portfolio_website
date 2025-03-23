import { GitHub, Move } from "react-feather";

function ProjectCard({ title, description, image, githubLink }) {
  return (
    <div className="frosted-glass overflow-hidden h-full transition-all duration-300 hover:shadow-xl group rounded-xl card-3d">
      <div className="relative h-48 w-full overflow-hidden rounded-t-xl">
        {/* Drag handle overlay */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
          <Move className="text-white h-8 w-8" />
        </div>

        {/* Project image or fallback */}
        {image ? (
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-purple-400 to-indigo-600 flex items-center justify-center">
            <span className="text-white text-xl font-bold">
              {title || "Project"}
            </span>
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 gradient-text">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 line-clamp-3 mb-4">
          {description}
        </p>
      </div>

      <div className="p-6 pt-0">
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-full px-4 py-3 gradient-btn rounded-lg transition-all duration-300"
        >
          <GitHub className="mr-2 h-4 w-4" />
          View on GitHub
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
