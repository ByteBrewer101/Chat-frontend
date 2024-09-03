import { Popup } from "../Components/PopUp";
import { TopBar } from "../Components/TopBar";
import { useRecoilValue } from "recoil";
import { popupState } from "../Recoil/Atoms";
import { ChatComponent } from "../Components/ChatComponent";

export function HomePage() {
  const popupHandle = useRecoilValue(popupState);

  return (
    <div className="h-screen bg-gradient-to-r from-slate-900 to-slate-950 flex justify-center">
      <TopBar />

        <ChatComponent/>
 
      {popupHandle && <Popup />}
    </div>
  );
}
