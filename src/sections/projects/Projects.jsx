import { RiNextjsFill, RiReactjsLine, RiSupabaseFill } from "react-icons/ri";
import { SiTailwindcss, SiVite } from "react-icons/si";
import { FaChartBar } from "react-icons/fa";
import { IoLogoFigma } from "react-icons/io5";

import ProjectItem from "./ProjectItem";
import SectionTitle from "../../components/SectionTitle";

function Projects() {
  return (
    <div id="projects" className="pt-16">
      <SectionTitle title="Recent Projects" />
      <div className="py-8 space-y-6">
        <ProjectItem
          logoImg="/portfolioBlack.png"
          projectTitle="Kenny Sieu | Portfolio Website"
          description="This is my personal portfolio website where I highlight the projects I've built and the skills I've developed as a Full-Stack Developer. The site is built using React for the UI, styled with Tailwind CSS, and icons from React-Icons."
          webLink="https://kenny-sieu-portfolio.vercel.app/"
          gitLink="https://github.com/kkennethsieu/Kenny-Sieu-Portfolio"
          tags={[
            { icon: <RiReactjsLine />, name: "React" },
            { icon: <SiTailwindcss />, name: "Tailwind CSS" },
          ]}
        />

        <ProjectItem
          logoImg="/jobquestLogo.png"
          projectTitle="JobQuest | Job Application Tracker"
          description="JobQuest is a web app that helps users track job applications and interviews. It allows users to add, edit, and view job statuses, while also providing data and stats to track progress. The app includes authentication for secure access to personal job application data."
          webLink="https://jobquestnow.vercel.app/"
          gitLink="https://github.com/kkennethsieu/JobQuest"
          tags={[
            { icon: <RiReactjsLine />, name: "React" },
            { icon: <SiTailwindcss />, name: "Tailwind CSS" },
            { icon: <RiSupabaseFill />, name: "Supabase" },
            { icon: <FaChartBar />, name: "Recharts" },
          ]}
        />

        <ProjectItem
          logoImg="/swirlLogo.png"
          projectTitle="SmoothieSwirl | Smoothie Ordering App"
          description="SmoothieSwirl is a smoothie ordering app that lets users browse and order smoothies. Users can add items to their cart, view previous orders, and take advantage of geolocation to easily set their delivery address."
          webLink="https://smoothie-swirl.vercel.app/"
          gitLink="https://github.com/kkennethsieu/SmoothieSwirl"
          tags={[
            { icon: <RiReactjsLine />, name: "React" },
            { icon: <SiTailwindcss />, name: "Tailwind CSS" },
            { icon: <RiSupabaseFill />, name: "Supabase" },
          ]}
        />

        <ProjectItem
          logoImg="/blogLogo.png"
          projectTitle="TravelToday | Personal Blog"
          description="TravelToday is a blog where I share my experiences and thoughts on the places I’ve visited, including what I liked about each location. It features a login system, allowing authenticated users to add and delete their posts."
          webLink="https://travel-today-one.vercel.app/"
          gitLink="https://github.com/kkennethsieu/TravelToday"
          tags={[
            { icon: <RiReactjsLine />, name: "React" },
            { icon: <SiTailwindcss />, name: "Tailwind CSS" },
            { icon: <RiSupabaseFill />, name: "Supabase" },
          ]}
        />

        <ProjectItem
          logoImg="/raveWalletTrans.png"
          projectTitle="RaveWallet | Festival Expense Tracker"
          description="RaveWallet is an app that allows users to sign up and log in to track their expenses at festivals. It helps you manage and monitor your spending while enjoying your events."
          webLink="https://rave-wallet.vercel.app/"
          gitLink="https://github.com/kkennethsieu/rave_wallet"
          tags={[
            { icon: <RiNextjsFill />, name: "Next.js" },
            { icon: <SiTailwindcss />, name: "Tailwind CSS" },
            { icon: <RiSupabaseFill />, name: "Supabase" },
            { icon: <IoLogoFigma />, name: "Figma" },
          ]}
        />
      </div>
    </div>
  );
}

export default Projects;
