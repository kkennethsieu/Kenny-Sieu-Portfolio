import { FaReact } from "react-icons/fa";

import TechnologyItem from "./TechnologyItem";
import SectionTitle from "../../components/SectionTitle";

function Technologies() {
  return (
    <div>
      <SectionTitle title="Technologies" />
      <div className="grid grid-cols-3 py-8 gap-10">
        <TechnologyItem
          icon={<FaReact />}
          title="Next.js"
          description="A React Framework"
        />
        <TechnologyItem
          icon={<FaReact />}
          title="Next.js"
          description="A React Framework"
        />
        <TechnologyItem
          icon={<FaReact />}
          title="Next.js"
          description="A React Framework"
        />
        <TechnologyItem
          icon={<FaReact />}
          title="Next.js"
          description="A React Framework"
        />
        <TechnologyItem
          icon={<FaReact />}
          title="Next.js"
          description="A React Framework"
        />
        <TechnologyItem
          icon={<FaReact />}
          title="Next.js"
          description="A React Framework"
        />
        <TechnologyItem
          icon={<FaReact />}
          title="Next.js"
          description="A React Framework"
        />
      </div>
    </div>
  );
}

export default Technologies;
