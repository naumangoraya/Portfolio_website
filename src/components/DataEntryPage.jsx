import { useState } from "react";
import ImageUpload from "./ImageUpload";
import { Save } from "react-feather";

function DataEntryPage({ onSubmit, initialData }) {
  const [formData, setFormData] = useState(
    initialData || {
      name: "",
      shortBio: "",
      description: "",
      skills: [],
      interests: [],
      profilePicture: null,
      projects: [
        {
          id: 1,
          title: "",
          description: "",
          image: null,
          githubLink: "",
        },
      ],
      socialMedia: [
        {
          id: 1,
          name: "",
          url: "",
        },
      ],
    }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSkillsChange = (e) => {
    const skills = e.target.value.split(",").map((skill) => skill.trim());
    setFormData((prev) => ({
      ...prev,
      skills,
    }));
  };

  const handleInterestsChange = (e) => {
    const interests = e.target.value
      .split(",")
      .map((interest) => interest.trim());
    setFormData((prev) => ({
      ...prev,
      interests,
    }));
  };

  const handleProjectChange = (index, field, value) => {
    const updatedProjects = [...formData.projects];
    updatedProjects[index] = {
      ...updatedProjects[index],
      [field]: value,
    };
    setFormData((prev) => ({
      ...prev,
      projects: updatedProjects,
    }));
  };

  const handleSocialMediaChange = (index, field, value) => {
    const updatedSocialMedia = [...formData.socialMedia];
    updatedSocialMedia[index] = {
      ...updatedSocialMedia[index],
      [field]: value,
    };
    setFormData((prev) => ({
      ...prev,
      socialMedia: updatedSocialMedia,
    }));
  };

  const addProject = () => {
    setFormData((prev) => ({
      ...prev,
      projects: [
        ...prev.projects,
        {
          id: Date.now(),
          title: "",
          description: "",
          image: null,
          githubLink: "",
        },
      ],
    }));
  };

  const removeProject = (index) => {
    const updatedProjects = [...formData.projects];
    updatedProjects.splice(index, 1);
    setFormData((prev) => ({
      ...prev,
      projects: updatedProjects,
    }));
  };

  const addSocialMedia = () => {
    setFormData((prev) => ({
      ...prev,
      socialMedia: [
        ...prev.socialMedia,
        {
          id: Date.now(),
          name: "",
          url: "",
        },
      ],
    }));
  };

  const removeSocialMedia = (index) => {
    const updatedSocialMedia = [...formData.socialMedia];
    updatedSocialMedia.splice(index, 1);
    setFormData((prev) => ({
      ...prev,
      socialMedia: updatedSocialMedia,
    }));
  };

  const handleProfilePictureChange = (imageData) => {
    setFormData((prev) => ({
      ...prev,
      profilePicture: imageData,
    }));
  };

  const handleProjectImageChange = (index, imageData) => {
    handleProjectChange(index, "image", imageData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold gradient-text mb-4 ">
            Create Your Portfolio
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Fill in the details below to generate your portfolio website.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Personal Information */}
          <div className="frosted-glass p-8 rounded-2xl">
            <h2 className="text-xl font-semibold mb-6 gradient-text">
              Personal Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-800/50 transition-all duration-300"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="shortBio" className="block text-sm font-medium">
                  Short Bio (tagline)
                </label>
                <input
                  type="text"
                  id="shortBio"
                  name="shortBio"
                  value={formData.shortBio}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-800/50 transition-all duration-300"
                  required
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <label
                  htmlFor="description"
                  className="block text-sm font-medium"
                >
                  About Me
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={2}
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-800/50 transition-all duration-300"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="skills" className="block text-sm font-medium">
                  Skills (comma separated)
                </label>
                <input
                  type="text"
                  id="skills"
                  name="skills"
                  value={formData.skills.join(", ")}
                  onChange={handleSkillsChange}
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-800/50 transition-all duration-300"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="interests"
                  className="block text-sm font-medium"
                >
                  Interests (comma separated)
                </label>
                <input
                  type="text"
                  id="interests"
                  name="interests"
                  value={formData.interests.join(", ")}
                  onChange={handleInterestsChange}
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-800/50 transition-all duration-300"
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <label className="block text-sm font-medium mb-2">
                  Profile Picture
                </label>
                <ImageUpload
                  initialImage={formData.profilePicture}
                  onImageChange={handleProfilePictureChange}
                  className="w-full"
                />
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="frosted-glass p-8 rounded-2xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold gradient-text">Projects</h2>
              <button
                type="button"
                onClick={addProject}
                className="px-4 py-2 gradient-btn text-sm font-medium transition-all duration-300 rounded-lg"
              >
                Add Project
              </button>
            </div>

            <div className="space-y-8">
              {formData.projects.map((project, index) => (
                <div
                  key={project.id}
                  className="p-6 border border-gray-200 dark:border-gray-700 rounded-xl bg-white/5 dark:bg-gray-800/20"
                >
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-medium">Project {index + 1}</h3>
                    {formData.projects.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeProject(index)}
                        className="text-red-500 hover:text-red-700 text-sm"
                      >
                        Remove
                      </button>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="block text-sm font-medium">Title</label>
                      <input
                        type="text"
                        value={project.title}
                        onChange={(e) =>
                          handleProjectChange(index, "title", e.target.value)
                        }
                        className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-800/50 transition-all duration-300"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-medium">
                        GitHub Link
                      </label>
                      <input
                        type="url"
                        value={project.githubLink}
                        onChange={(e) =>
                          handleProjectChange(
                            index,
                            "githubLink",
                            e.target.value
                          )
                        }
                        className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-800/50 transition-all duration-300"
                      />
                    </div>

                    <div className="space-y-2 md:col-span-2">
                      <label className="block text-sm font-medium">
                        Description
                      </label>
                      <textarea
                        value={project.description}
                        onChange={(e) =>
                          handleProjectChange(
                            index,
                            "description",
                            e.target.value
                          )
                        }
                        rows={2}
                        className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-800/50 transition-all duration-300"
                        required
                      />
                    </div>

                    <div className="space-y-2 md:col-span-2">
                      <label className="block text-sm font-medium mb-2">
                        Project Image
                      </label>
                      <ImageUpload
                        initialImage={project.image}
                        onImageChange={(imageData) =>
                          handleProjectImageChange(index, imageData)
                        }
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Social Media */}
          <div className="frosted-glass p-8 rounded-2xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold gradient-text">
                Social Media
              </h2>
              <button
                type="button"
                onClick={addSocialMedia}
                className="px-4 py-2 gradient-btn text-sm font-medium transition-all duration-300 rounded-lg"
              >
                Add Social Media
              </button>
            </div>

            <div className="space-y-4">
              {formData.socialMedia.map((social, index) => (
                <div key={social.id} className="flex items-center space-x-4">
                  <div className="flex-1">
                    <input
                      type="text"
                      placeholder="Platform (e.g., GitHub, LinkedIn)"
                      value={social.name}
                      onChange={(e) =>
                        handleSocialMediaChange(index, "name", e.target.value)
                      }
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-800/50 transition-all duration-300"
                    />
                  </div>
                  <div className="flex-1">
                    <input
                      type="url"
                      placeholder="URL"
                      value={social.url}
                      onChange={(e) =>
                        handleSocialMediaChange(index, "url", e.target.value)
                      }
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-800/50 transition-all duration-300"
                    />
                  </div>
                  {formData.socialMedia.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeSocialMedia(index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Remove
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-8 py-4 gradient-btn flex items-center space-x-3 text-lg font-medium rounded-full"
            >
              <Save className="h-5 w-5" />
              <span>Save & Generate Portfolio</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default DataEntryPage;
