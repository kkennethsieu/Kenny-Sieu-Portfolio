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
  SiSwift,
  SiFirebase,
  SiGooglecloud,
} from "react-icons/si";
import { Clapperboard } from "lucide-react";

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
          logoImg="/scout_logo.png"
          projectTitle="Scout | Photography Location Discovery App"
          description="Scout is a photography location discovery app that helps photographers find exactly where to take their next shot. Think of it like Yelp, but for photo spots. Instead of showing you a landmark and calling it a day, Scout gives you the exact vantage point, real photos taken from that angle, and reviews from photographers who've actually been there. Scout is live on the App Store."
          highlights={[
            "Full SwiftUI iOS app with a custom tab bar, interactive maps via MapKit, and an @Observable architecture throughout.",
            "FastAPI backend deployed on Google Cloud Run with Firestore for data, Cloud Storage for photos, and Secret Manager for API keys.",
            "Geospatial spot discovery using Haversine distance calculations and bounding box queries to efficiently rank and filter locations by proximity.",
            "Multi path creation flow supporting four entry points: photo upload with EXIF extraction, GPS drop, tapping an existing spot, or manual pin placement.",
            "25 meter radius deduplication with auto debounced queries to prevent duplicate spots and reduce unnecessary API calls.",
            "Firebase Auth with Sign in with Apple, Google Sign-In, and nonce based token validation across iOS and backend.",
            "CI/CD pipeline through GitHub Actions handling automated tests and deployment to Cloud Run via Artifact Registry.",
            "Seeded 400+ spots at launch using a data pipeline built on Google Places API and Unsplash to solve the cold start problem.",
          ]}
          webLink="https://apps.apple.com/us/app/scout-photo-locations/id6781030287"
          gitLink="https://github.com/kkennethsieu/Scout-Overview"
          tags={[
            { icon: <SiSwift />, name: "Swift" },
            { icon: <SiSwift />, name: "SwiftUI" },
            { icon: <SiFirebase />, name: "Firebase" },
            { icon: <FaPython />, name: "FastAPI" },
            { icon: <SiGooglecloud />, name: "Cloud Run" },
            { icon: <SiFirebase />, name: "Firestore" },
          ]}
        />

        <ProjectItem
          logoImg={Clapperboard}
          projectTitle="Scenerio | AI Video Editor - Hackathon Winner"
          description="Scenerio is a self-improving AI video editor built at a hackathon, winning 1st place in the Gemini API track. It automatically generates a rough cut from raw footage and lets users guide edits in real time through a conversational interface."
          highlights={[
            "AI Pipeline: Powered by Gemini (multimodal) to analyze raw footage and generate automatic rough cuts with title cards, background music, and contextual visuals.",
            "Conversational Editing: Users approve, deny, or redirect AI edits in real time via a chat interface, creating a feedback loop where the editor improves with each iteration.",
            "Video Processing: FFmpeg and Pillow handle frame extraction, splicing, and rendering; Remotion drives programmatic video composition.",
            "Backend: FastAPI server with Pydantic for typed request validation and Pytest for test coverage.",
            "Frontend: React UI with real-time edit preview and a conversational sidebar for directing the AI.",
          ]}
          webLink="https://github.com/chengenli9/BeaverHacks2026"
          gitLink="https://github.com/chengenli9/BeaverHacks2026"
          tags={[
            { icon: <RiReactjsLine />, name: "React" },
            { icon: <FaPython />, name: "Python" },
            { icon: <SiFlask />, name: "FastAPI" },
          ]}
        />
        <ProjectItem
          logoImg="/strideLogo.png"
          projectTitle="Stride | iOS Run Tracking App"
          description="Stride is a full-stack iOS fitness app inspired by Nike Run Club. It tracks outdoor runs with live GPS, split pacing, and route mapping, syncing data to a cloud backend with full offline support."
          highlights={[
            "iOS App — Built with SwiftUI, SwiftData, CoreLocation, and MapKit for live GPS tracking, split detection, and interactive route maps.",
            "Offline Sync — Implemented a custom SyncManager with delta push/pull logic and NWPathMonitor to handle seamless online/offline transitions.",
            "Backend — Node.js/Express REST API with Firestore, deployed on Google Cloud App Engine with Firebase Auth for secure user sessions.",
            "Data Visualization — Swift Charts dashboard with weekly, monthly, and yearly run aggregation and a custom RunFormatter for unit display.",
            "UI Polish — Custom Lottie splash screen, MapSnapshotView for performant route previews, and a fully dark-mode-compatible design system.",
          ]}
          webLink="https://github.com/kkennethsieu/stride-app"
          gitLink="https://github.com/kkennethsieu/stride-app"
          tags={[
            { icon: <SiSwift />, name: "Swift" },
            { icon: <SiSwift />, name: "SwiftUI" },
            { icon: <SiFirebase />, name: "Firebase" },
            { icon: <SiFirebase />, name: "Firestore" },
            { icon: <FaNodeJs />, name: "Node.js" },
            { icon: <SiGooglecloud />, name: "GCP" },
          ]}
        />

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
      </div>
    </div>
  );
}

export default Projects;
