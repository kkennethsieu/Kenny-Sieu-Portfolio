import MainLeft from "./MainLeft";
import MainRight from "./MainRight";
import { motion } from "motion/react";

function MainLayout() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-center lg:ml-[5%] gap-6 lg:px-10 px-10 mt-12 ">
      {/* Left Section */}
      <div className="flex-1 w-full lg:max-w-lg xl:max-w-2xl">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:sticky lg:top-10"
        >
          <MainLeft />
        </motion.div>
      </div>

      {/* Right Section */}
      <div className="flex-1 w-full lg:max-w-lg xl:max-w-2xl">
        <MainRight />
      </div>
    </div>
  );
}

export default MainLayout;
