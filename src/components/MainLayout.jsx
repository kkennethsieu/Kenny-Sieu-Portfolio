import MainLeft from "./MainLeft";
import MainRight from "./MainRight";

function MainLayout() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-center lg:ml-[5%] gap-6 lg:px-10 px-10 mt-12 ">
      {/* Left Section */}
      <div className="lg:max-w-lg w-full xl:max-w-2xl flex-1">
        <div className="lg:sticky lg:top-10">
          <MainLeft />
        </div>
      </div>

      {/* Right Section */}
      <div className="lg:max-w-lg w-full xl:max-w-2xl flex-1">
        <MainRight />
      </div>
    </div>
  );
}

export default MainLayout;
