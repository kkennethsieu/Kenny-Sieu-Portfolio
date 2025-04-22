import { RiNextjsLine } from "react-icons/ri";
import { SiTailwindcss, SiVite } from "react-icons/si";
import ProjectItem from "./ProjectItem";
import SectionTitle from "../../components/SectionTitle";

function Projects() {
  return (
    <div id="project " className="pt-16">
      <SectionTitle title="Recent Projects" />
      <div className="py-8 space-y-6">
        <ProjectItem
          logoImg="/raveWalletTrans.png"
          projectTitle="Kenny Sieu | Portfolio Website"
          description="A professional portfolio website showcasing my projects and skills as a Full-Stack Developer. Built with Next.js, Tailwind CSS, and Shadcn/UI."
          webLink="#"
          gitLink="#"
          tags={[
            { icon: <RiNextjsLine />, name: "React" },
            { icon: <SiTailwindcss />, name: "Tailwind CSS" },
            { icon: <SiVite />, name: "Vite" },
          ]}
        />

        <ProjectItem
          logoImg="/jobquestLogo.png"
          projectTitle="JobQuest | Job Application Tracker"
          description="JobQuest is a web application that helps users track their job applications and interviews. Add, edit, and view job statuses, interview dates, and relevant notes, all in a clean and responsive UI."
          webLink="https://jobquestnow.vercel.app/"
          gitLink="https://github.com/kkennethsieu/JobQuest"
          tags={[
            { icon: <RiNextjsLine />, name: "Next.JS" },
            { icon: <SiTailwindcss />, name: "Tailwind CSS" },
          ]}
        />

        <ProjectItem
          logoImg="/swirlLogo.png"
          projectTitle="SmoothieSwirl | Smoothie Ordering App"
          description="SmoothieSwirl allows users to browse, customize, and order smoothies with ease. Choose ingredients, view nutritional info, and complete the order with a simple interface."
          webLink="https://smoothie-swirl.vercel.app/"
          gitLink="https://github.com/kkennethsieu/SmoothieSwirl"
          tags={[
            { icon: <RiNextjsLine />, name: "React" },
            { icon: <SiTailwindcss />, name: "Tailwind CSS" },
          ]}
        />

        <ProjectItem
          logoImg="/raveWalletTrans.png"
          projectTitle="RaveWallet | Festival Expense Tracker"
          description="Track and manage your festival expenses with this budgeting app. Set budgets, track spending, and visualize your total expenses to stay within your limits."
          webLink="#"
          gitLink="#"
          tags={[
            { icon: <RiNextjsLine />, name: "React" },
            { icon: <SiTailwindcss />, name: "Supabase" },
          ]}
        />

        <ProjectItem
          logoImg="/blogLogo.png"
          projectTitle="TravelToday | Personal Blog"
          description="A personal blog where I write about tech and web development. Search and read posts, and enjoy a minimalist design with a Markdown-powered backend."
          webLink="#"
          gitLink="#"
          tags={[
            { icon: <RiNextjsLine />, name: "Next.js" },
            { icon: <SiTailwindcss />, name: "Tailwind CSS" },
          ]}
        />
      </div>
    </div>
  );
}

export default Projects;
