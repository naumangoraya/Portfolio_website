import { GitHub, Linkedin, Twitter, Instagram } from "react-feather";

function Footer({ socialMedia = [] }) {
  const getIconByName = (name) => {
    const lowerName = name.toLowerCase();

    if (lowerName.includes("github")) return <GitHub className="h-5 w-5" />;
    if (lowerName.includes("linkedin")) return <Linkedin className="h-5 w-5" />;
    if (lowerName.includes("twitter") || lowerName.includes("x"))
      return <Twitter className="h-5 w-5" />;
    if (lowerName.includes("instagram"))
      return <Instagram className="h-5 w-5" />;

    return null;
  };

  return (
    <footer className="py-10 border-t border-gray-200 dark:border-gray-700 frosted-glass">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} Portfolio. All rights reserved.
            </p>
          </div>

          <div className="flex space-x-8">
            {socialMedia.length > 0 ? (
              socialMedia.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors transform hover:-translate-y-2 hover:scale-110 duration-300"
                  aria-label={social.name}
                >
                  {getIconByName(social.name) || social.name}
                </a>
              ))
            ) : (
              <>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors transform hover:-translate-y-2 hover:scale-110 duration-300"
                  aria-label="GitHub"
                >
                  <GitHub className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors transform hover:-translate-y-2 hover:scale-110 duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors transform hover:-translate-y-2 hover:scale-110 duration-300"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors transform hover:-translate-y-2 hover:scale-110 duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
