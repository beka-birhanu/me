export const portfolioData = {
  navItems: [
    { href: "#home", text: "home" },
    { href: "#about-me", text: "about-me" },
    { href: "#skills", text: "skills" },
    { href: "#projects", text: "projects" },
    { href: "#contact", text: "contact" },
  ],
  logo: {
    src: "/images/logo.png",
    alt: "Logo",
  },
  aboutMe: {
    text: `Hello, i’m Beka! <br />
           <br />I am a software engineering student who started my software
           journey later in life in 2023. I have been working hard to catch up
           and am currently seeking an opportunity to gain hands-on experience
           in a company that values product quality and fosters professional
           growth, helping me become the best version of myself. <br />
           <br />I enjoy working on back-end solutions, focusing on building
           efficient and reliable systems. Solving complex problems and
           creating the underlying architecture of applications is something I
           find both challenging and rewarding.`,
    resumeLink: "/resume.pdf",
  },
  skills: {
    os: ["Linux", "Windows"],
    databases: ["SQLite", "PostgreSQL", "MongoDB", "MySQL"],
    architecture: ["MVC", "Clean-Arch", "Micro-Service"],
    languages: ["Python", "Go", "C#", "Typescript", "Java", "Javascript"],
    frameworks: [
      "Gin",
      "Gqlgen",
      ".NET",
      "Nest.js",
      "Express.js",
      "React",
      "Next.js",
    ],
    tools: ["Docker", "Postman", "Insomnia", "Git"],
    others: ["GraphQL", "Tailwind", "CSS"],
    editors: ["Neovim", "VSCode"],
  },
  projects: [
    {
      image: { src: "/images/clean-arch.jpg", alt: "Project Thumbnail" },
      title: "ArchitectedFinance",
      body: "This project is a showcase of my skills in building scalable and efficient applications.",
      keywords: ["React", "Node.js", "GraphQL", "TypeScript"],
      links: [
        {
          href: "https://github.com/yourusername/awesome-project",
          text: "GitHub",
        },
        { href: "https://live-demo.com", text: "Demo" },
      ],
    },
    {
      image: { src: "/images/vote.png", alt: "Project Thumbnail" },
      title: "VoteSphere",
      body: "This project is a showcase of my skills in building scalable and efficient applications.",
      keywords: ["React", "Node.js", "GraphQL", "TypeScript"],
      links: [
        {
          href: "https://github.com/yourusername/awesome-project",
          text: "GitHub",
        },
        { href: "https://live-demo.com", text: "Demo" },
      ],
    },
    {
      image: { src: "/images/idirr.png", alt: "Project Thumbnail" },
      title: "ArchitectedFinance",
      body: "This project is a showcase of my skills in building scalable and efficient applications.",
      keywords: ["React", "Node.js", "GraphQL", "TypeScript"],
      links: [
        {
          href: "https://github.com/yourusername/awesome-project",
          text: "GitHub",
        },
        { href: "https://live-demo.com", text: "Demo" },
      ],
    },
  ],
  contact: {
    text: `I’m interested in internship opportunities. However, if you have
           other requests or questions, don’t hesitate to contact me.`,
    socialLinks: [
      {
        href: "https://linkedin.com/in/beka-birhanu-atomsa",
        iconUrl: "/images/icons/linkedin.png",
      },
      {
        href: "https://github.com/yourusername",
        iconUrl: "/images/icons/github.png",
      },
      { href: "mailto:beka@example.com", iconUrl: "/images/icons/email.png" },
    ],
  },
};
