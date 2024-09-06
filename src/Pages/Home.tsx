import { useState, useEffect } from "react";
import { TopBar } from "../Components/TopBar";
import { useRecoilValue } from "recoil";
import { chatStatus, popupStateCreate, popupStateJoin } from "../Recoil/Atoms";
import { Plain } from "../Components/PlainBackground";
import { JoinPopup } from "../Components/Joinpopup";
import { CreatePopup } from "../Components/Createpopup";
import { Chat2 } from "../Components/ChatComponent2";

export function HomePage() {
  const [isMdOrLarger, setIsMdOrLarger] = useState(true);

  const popupHandle = useRecoilValue(popupStateJoin);
  const popupHandleCreate = useRecoilValue(popupStateCreate);
  const chatHandle = useRecoilValue(chatStatus);

  useEffect(() => {
    const handleResize = () => {
      setIsMdOrLarger(window.innerWidth >= 768); // Tailwind's md breakpoint is 768px
    };

    // Set initial state
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="h-screen flex justify-center items-center">
      <TopBar />

      {isMdOrLarger && !chatHandle && <Plain />}
      {popupHandle && <JoinPopup />}
      {popupHandleCreate && <CreatePopup />}
    
      <Chat2 />
    </div>
  );
}
