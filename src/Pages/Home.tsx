
import { TopBar } from "../Components/TopBar";
import { useRecoilValue } from "recoil";
import { chatStatus,  popupStateCreate, popupStateJoin } from "../Recoil/Atoms";
import { Plain } from "../Components/PlainBackground";
import { JoinPopup } from "../Components/Joinpopup";
import { CreatePopup } from "../Components/Createpopup";
import { Chat2 } from "../Components/ChatComponent2";



export function HomePage() {
  const popupHandle = useRecoilValue(popupStateJoin);
  const popupHandleCreate = useRecoilValue(popupStateCreate);
  const chatHandle = useRecoilValue(chatStatus)


  return (
    <div className="h-screen bg-gradient-to-r from-slate-900 to-slate-950  flex justify-center items-center">
      <TopBar />

      {!chatHandle && <Plain />}
      {popupHandle && <JoinPopup />}
      {popupHandleCreate && <CreatePopup/>}
      {/* {chatHandle && <ChatComponent />} */}
      <Chat2/>
    </div>
  );
}
