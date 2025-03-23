function AboutSection({ profilePicture, skills, interests, description }) {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent neon-text">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-xl animate-float">
              {profilePicture ? (
                <img src={profilePicture || "/placeholder.svg"} alt="Profile" className="object-cover w-full h-full" />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-purple-400 to-indigo-600 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">
                    {/* Display initials if name is available */}
                    {description ? description.charAt(0).toUpperCase() : "?"}
                  </span>
                </div>
              )}

              {/* Shine effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/30 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </div>
          </div>

          <div className="space-y-6 frosted-glass p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 card-3d">
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed">{description || "No description provided"}</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent">
                Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills && skills.length > 0 ? (
                  skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white text-sm rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))
                ) : (
                  <p className="text-gray-500 dark:text-gray-400">No skills listed</p>
                )}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent">
                Interests
              </h3>
              <div className="flex flex-wrap gap-3">
                {interests && interests.length > 0 ? (
                  interests.map((interest, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-gray-200 dark:border-gray-700 text-sm rounded-full shadow hover:shadow-md hover:bg-white/20 dark:hover:bg-gray-700/50 transition-all duration-300"
                    >
                      {interest}
                    </span>
                  ))
                ) : (
                  <p className="text-gray-500 dark:text-gray-400">No interests listed</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection

