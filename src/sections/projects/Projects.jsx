//COMPONENTS
import ProjectItem from "./ProjectItem";
import SectionTitle from "../../components/SectionTitle";
//ICONS
import { RiNextjsFill, RiReactjsLine, RiSupabaseFill } from "react-icons/ri";
import {
  SiTailwindcss,
  SiMui,
  SiRadixui,
  SiReactquery,
  SiFlask,
  SiSqlite,
  SiRabbitmq,
} from "react-icons/si";
import { FaChartBar, FaNodeJs, FaPython, FaDocker } from "react-icons/fa";
import { IoLogoFigma } from "react-icons/io5";
import { BsStripe } from "react-icons/bs";
import { TbBrandMysql } from "react-icons/tb";

function Projects() {
  return (
    <div id="projects" className="pt-16">
      <SectionTitle title="Recent Projects" />
      <div className="space-y-6 py-8">
        <ProjectItem
          logoImg="/playReview.png"
          projectTitle="Play Review | Microservice Game Review App"
          description="GameReview is a full-stack, Dockerized microservices platform built to demonstrate a scalable and modular architecture for game enthusiasts. The platform allows users to explore games, post and manage reviews, like other users’ reviews, and receive real-time notifications."
          highlights={[
            "User/Auth Service – Built with Node.js, Express, and Bcrypt, this service handles user authentication with JWT tokens, enabling secure login, logout, and account management.",
            "Game Catalog Service – Implemented in Python and Flask, this service scrapes game data from external sources to provide an up-to-date catalog of games.",
            "Reviews Service – Using Node.js and Express, users can create, read, update, and delete (CRUD) reviews, building the core of the community interaction.",
            "Likes Service – Allows users to like reviews, built with Node.js and Express, enabling social interactions between users.",
            "Notification Service – Sends real-time notifications for likes and other review actions, leveraging Node.js and Express for event-driven communication.",
          ]}
          webLink="https://play-review.vercel.app/"
          gitLink="https://github.com/kkennethsieu/PlayReview-Overview"
          tags={[
            { icon: <RiReactjsLine />, name: "React" },
            { icon: <SiReactquery />, name: "React Query" },
            { icon: <SiTailwindcss />, name: "Tailwind CSS" },
            { icon: <IoLogoFigma />, name: "Figma" },
            { icon: <FaNodeJs />, name: "Node.JS" },
            { icon: <RiReactjsLine />, name: "Bcrypt" },
            { icon: <FaPython />, name: "Python" },
            { icon: <SiFlask />, name: "Flask" },
            { icon: <SiSqlite />, name: "SQLite" },
            { icon: <FaDocker />, name: "Docker" },
            { icon: <SiRabbitmq />, name: "RabbitMQ" },
          ]}
        />

        <ProjectItem
          logoImg="/music-management-logo.png"
          projectTitle="Music Festival Management System | Database Design Project"
          description="A full-stack music festival management system with a relational database backend and a React-based frontend. The system manages festivals, stages, artists, staff, vendors, and sponsors, providing CRUD operations and real-time scheduling features."
          highlights={[
            "Festival & Stage Management — Developed backend schema and APIs to handle multiple festivals, their stages, schedules, capacities, and event details.",
            "Artist & Performance Scheduling — Implemented CRUD functionality for artists, performances, and stage assignments across multi-day festivals.",
            "Staff, Vendor & Sponsor Operations — Built relational structures and frontend interfaces to track staff roles, shifts, vendor booths, and sponsor contributions.",
            "Full-Stack Features — Created a React frontend that interacts with a backend API (Node.js / Express or Flask) to perform real-time data updates and queries.",
            "Database Design & Normalization — Designed a fully normalized relational schema supporting complex queries, foreign keys, junction tables, and sample datasets.",
          ]}
          webLink="https://kenny-sieu-portfolio.vercel.app/"
          gitLink="https://github.com/kkennethsieu/Music-Festival-Management"
          tags={[
            { icon: <RiReactjsLine />, name: "React" },
            { icon: <SiTailwindcss />, name: "Tailwind CSS" },
            { icon: <IoLogoFigma />, name: "Figma" },
            { icon: <FaNodeJs />, name: "Node.JS" },
            { icon: <TbBrandMysql />, name: "MySQL" },
          ]}
        />

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
          logoImg="/fitSyncLogo.png"
          projectTitle="Fit Sync | Workout Tracker App"
          description="FitSync is a full-featured fitness tracking web app that helps users monitor workouts, personal records, and exercise trends. It offers insightful analytics, workout summaries, and a personalized dashboard to motivate progress and improve fitness routines — all with a clean, responsive, and dark-mode-friendly design."
          webLink="https://fit-sync-now.vercel.app/"
          gitLink="https://github.com/kkennethsieu/FitSync"
          figmaLink="https://www.figma.com/design/2MzjcKcpAVKgqiz6PdCGHQ/FitSync?node-id=0-1&p=f"
          tags={[
            { icon: <RiNextjsFill />, name: "Next.js" },
            { icon: <RiNextjsFill />, name: "Auth.js" },
            { icon: <RiReactjsLine />, name: "React" },
            { icon: <SiTailwindcss />, name: "Tailwind CSS" },
            { icon: <RiSupabaseFill />, name: "Supabase" },
            { icon: <FaChartBar />, name: "Recharts" },
            { icon: <FaNodeJs />, name: "Node.js" },
            { icon: <SiMui />, name: "Material UI" },
            { icon: <IoLogoFigma />, name: "Figma" },
          ]}
        />
        <ProjectItem
          logoImg="/cedarGlideLogo.svg"
          projectTitle="CedarGlide Wax | E-Commerce Store"
          description="CedarGlide Wax is an e-commerce web store dedicated to snowboarding wax products. It features a clean UI for browsing products, adding items to cart, and a smooth checkout experience. Built with modern React tools, it provides responsive design and efficient state management."
          webLink="https://cedar-glide-wax.vercel.app/"
          gitLink="https://github.com/kkennethsieu/CedarGlideWax_Front"
          figmaLink="https://www.figma.com/design/GdllyQknqxn2aK5Fs1cCue/CedarWax-Co.?node-id=25-1340&t=7Uk68eaEZ3JYBhgA-1"
          tags={[
            { icon: <RiReactjsLine />, name: "React" },
            { icon: <SiTailwindcss />, name: "Tailwind CSS" },
            { icon: <RiSupabaseFill />, name: "Supabase" },
            {
              icon: <BsStripe />,
              name: "Stripe",
            },
            { icon: <FaNodeJs />, name: "Node.js" },
            { icon: <SiMui />, name: "Material UI" },
            { icon: <IoLogoFigma />, name: "Figma" },
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
      </div>
    </div>
  );
}

export default Projects;
