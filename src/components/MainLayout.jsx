import MainLeft from "./MainLeft";
import MainRight from "./MainRight";

function MainLayout() {
  return (
    <div className="flex justify-center ml-[5%]">
      <div className="max-w-2xl">
        <div className="sticky top-10">
          <MainLeft />
        </div>
      </div>

      <div className="max-w-2xl flex-1">
        <MainRight />
      </div>
    </div>
  );
}

export default MainLayout;
