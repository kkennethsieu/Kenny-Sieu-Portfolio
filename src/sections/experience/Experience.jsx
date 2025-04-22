import SectionTitle from "../../components/SectionTitle";
import ExperienceItem from "./ExperienceItem";

function Experience() {
  return (
    <div id="experiences" className="py-16">
      <SectionTitle title="Experiences" />
      <section className="flex flex-col gap-6 py-8">
        <ExperienceItem
          date="2024-Present"
          company="Studio Auroar"
          role="Founder | Lead Developer"
          description="Founded a web development agency focused on delivering high-quality
          websites and custom digital solutions. Lead the end-to-end development
          process, from client consultation and project planning to design
          implementation and deployment. Skilled in building scalable web apps,
          e-commerce platforms, and custom API integrations using modern
          frameworks like Next.js. Oversee a team of developers and coordinate
          projects to ensure timely delivery and client satisfaction."
        />
        <ExperienceItem
          date="2024-Present"
          company="Studio Auroar"
          role="Founder | Lead Developer"
          description="Founded a web development agency focused on delivering high-quality
          websites and custom digital solutions. Lead the end-to-end development
          process, from client consultation and project planning to design
          implementation and deployment. Skilled in building scalable web apps,
          e-commerce platforms, and custom API integrations using modern
          frameworks like Next.js. Oversee a team of developers and coordinate
          projects to ensure timely delivery and client satisfaction."
        />
      </section>
    </div>
  );
}

export default Experience;
