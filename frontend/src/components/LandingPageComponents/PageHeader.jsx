import { useEffect, useState } from "react";
import TopBanner from "./TopBanner";

const PageHeader = () => {
  const colourList = ["#1279F2", "#989898", "#8FFAA7", "#8FF4FA", "#C8C841", "#FA8FE5", "#FA8F8F"];

  const [colourListIndex, setColourListIndex] = useState(0);

  const handleClick = () => {
    const iterateColour = (colourListIndex + 1) % colourList.length;
    setColourListIndex(iterateColour);
  }

  useEffect(() => {
    // Change text color after component has been mounted or updated
    document.getElementById("title").style.color = colourList[colourListIndex];
  }, [colourListIndex]);

  return (
    <div id="landing-page-header">
      <TopBanner />
      <div className="flex flex-row w-full justify-center items-center mt-10">
        <div className="flex flex-row w-5/6 space-y-0 justify-between items-left md:space-y-4 md:flex-col md:items-center">
          <div className="flex flex-col w-full gap-3">
            <p className="drop-shadow-md text-xs sm:text-base">
              Alexander Lai Presents:
            </p>
            <h1 id="title" onClick={handleClick} className={`justify-center font-bold cursor-pointer text-opacity-1 text-4xl sm:text-7xl`}>
              unilectives - bootleg version
            </h1>
            <p className="justify-center font-semibold text-xs sm:text-base">
              Your one-stop shop for UNSW course and elective reviews.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageHeader;