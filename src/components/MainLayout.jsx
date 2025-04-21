import MainLeft from "./MainLeft";
import MainRight from "./MainRight";

function MainLayout() {
  return (
    <div className="flex w-full mt-20 mx-auto h-screen relative">
      <div className="w-[40%] fixed left-56">
        <MainLeft />
      </div>
      <div className="w-[40%] ml-[48%]">
        <MainRight />
      </div>
    </div>
  );
}

export default MainLayout;
