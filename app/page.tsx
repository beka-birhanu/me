import { ButtonLink } from "@/components/button";
import { Card } from "@/components/card";
import { Table } from "@/components/table";
import { Nav } from "@/components/nav";
import { Title } from "@/components/title";
import { Intro } from "@/components/intro";
import { Fragment } from "react";

const portfolioData = {
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

export default function Home() {
  return (
    <Fragment>
      <Nav items={portfolioData.navItems} logo={portfolioData.logo} />
      <div className="flex flex-col gap-48 items-start w-full max-w-screen-xl md:mt-64">
        <Intro />
        <div>
          <Title title="about-me" useLine={true} size="large" />
          <p
            className="text-secondary text-2xl mt-8 mb-16"
            dangerouslySetInnerHTML={{ __html: portfolioData.aboutMe.text }}
          />
          <ButtonLink
            href={portfolioData.aboutMe.resumeLink}
            text="resume"
            target="_self"
            isPrimary={true}
          />
        </div>
        <div className="w-full">
          <Title title="skills" useLine={true} size="large" />
          <div className="w-full grid grid-cols-5 gap-5 justify-center mt-12">
            <Table data={portfolioData.skills.os} header="OS" />
            <div className="flex flex-col gap-5">
              <Table data={portfolioData.skills.databases} header="Database" />
              <Table
                data={portfolioData.skills.architecture}
                header="Database"
              />
            </div>
            <div className="flex flex-col gap-5">
              <Table data={portfolioData.skills.languages} header="Language" />
              <Table
                data={portfolioData.skills.frameworks}
                header="Frameworks"
              />
            </div>
            <div className="flex flex-col gap-5">
              <Table data={portfolioData.skills.tools} header="Tools" />
              <Table data={portfolioData.skills.others} header="Others" />
            </div>
            <Table data={portfolioData.skills.editors} header="Editors" />
          </div>
        </div>
        <div className="w-full">
          <Title title="projects" useLine={true} size="large" />
          <div className="grid grid-cols-3 gap-8 mt-12 mx-12">
            {portfolioData.projects.map((project, index) => (
              <Card key={index} {...project} />
            ))}
          </div>
        </div>
        <div className="w-full">
          <Title title="contact" useLine={true} size="large" />
          <div className="flex gap-72 text-2xl text-secondary my-12">
            <p>{portfolioData.contact.text}</p>
            <div className="border-secondary border-[1px] w-96 p-5">
              <p>Message me here</p>
              <div className="flex justify-center mt-5">
                {portfolioData.contact.socialLinks.map((link, index) => (
                  <ButtonLink
                    key={index}
                    href={link.href}
                    isPrimary={false}
                    border={false}
                    iconUrl={link.iconUrl}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="border-t-[1px] border-secondary w-full mt-48 text-center text-secondary text-xl p-12">
        &copy; Copyright {new Date().getFullYear()}. Made by Beka Birhanu
      </footer>
    </Fragment>
  );
}
