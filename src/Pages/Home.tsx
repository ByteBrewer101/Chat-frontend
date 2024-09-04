
import { TopBar } from "../Components/TopBar";
import { useRecoilValue } from "recoil";
import { chatStatus, popupState } from "../Recoil/Atoms";
import { ChatComponent } from "../Components/ChatComponent";
import { Plain } from "../Components/PlainBackground";
import { JoinPopup } from "../Components/Joinpopup";
import { CreatePopup } from "../Components/Createpopup";



export function HomePage() {
  const popupHandle = useRecoilValue(popupState);
  const chatHandle = useRecoilValue(chatStatus)


  return (
    <div className="h-screen bg-gradient-to-r from-slate-900 to-slate-950 flex justify-center items-center">
      <TopBar />

      {!chatHandle && <Plain />}
      {popupHandle && <JoinPopup />}
      {popupHandle && <CreatePopup/>}
      {chatHandle && <ChatComponent />}
    </div>
  );
}
