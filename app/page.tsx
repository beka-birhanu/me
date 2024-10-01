import { ButtonLink } from "@/components/button";
import { Card } from "@/components/card";
import { Table } from "@/components/table";
import { Nav } from "@/components/nav";
import { Title } from "@/components/title";
import { Intro } from "@/components/intro";
import { Fragment } from "react";
import { portfolioData } from "./data";

const AboutMeSection = () => (
  <div className="w-full">
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
);

const SkillsSection = () => (
  <div className="w-full">
    <Title title="skills" useLine={true} size="large" />
    <div className="w-full grid grid-cols-5 gap-5 justify-center mt-12">
      <Table data={portfolioData.skills.os} header="OS" />
      <div className="flex flex-col gap-5">
        <Table data={portfolioData.skills.databases} header="Database" />
        <Table data={portfolioData.skills.architecture} header="Database" />
      </div>
      <div className="flex flex-col gap-5">
        <Table data={portfolioData.skills.languages} header="Language" />
        <Table data={portfolioData.skills.frameworks} header="Frameworks" />
      </div>
      <div className="flex flex-col gap-5">
        <Table data={portfolioData.skills.tools} header="Tools" />
        <Table data={portfolioData.skills.others} header="Others" />
      </div>
      <Table data={portfolioData.skills.editors} header="Editors" />
    </div>
  </div>
);

const ProjectsSection = () => (
  <div className="w-full">
    <Title title="projects" useLine={true} size="large" />
    <div className="grid grid-cols-3 gap-5 mt-12 ">
      {portfolioData.projects.map((project, index) => (
        <Card key={index} {...project} />
      ))}
    </div>
  </div>
);

const ContactSection = () => (
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
);
export default function Home() {
  return (
    <Fragment>
      <Nav items={portfolioData.navItems} logo={portfolioData.logo} />
      <div className="flex flex-col gap-48 items-start w-full max-w-screen-xl m-64">
        <Intro />
        <AboutMeSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </div>
      <footer className="border-t-[1px] border-secondary w-full text-center text-secondary text-xl p-12">
        &copy; Copyright {new Date().getFullYear()}. Made by Beka Birhanu
      </footer>
    </Fragment>
  );
}
