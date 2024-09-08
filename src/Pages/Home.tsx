import { TopBar } from "../Components/TopBar";
import { useRecoilValue } from "recoil";
import { chatStatus, popupStateCreate, popupStateJoin} from "../Recoil/Atoms";

import { JoinPopup } from "../Components/Joinpopup";
import { CreatePopup } from "../Components/Createpopup";
import { Chat2 } from "../Components/ChatComponent2";
import { Plain } from "../Components/PlainBackground";

export function HomePage() {
  const popupHandle = useRecoilValue(popupStateJoin);
  const popupHandleCreate = useRecoilValue(popupStateCreate);
  const chatHandler = useRecoilValue(chatStatus)
 

  return (
    <div className="h-screen flex justify-center items-center">
      <TopBar />

     { !chatHandler &&<Plain/>}

      {popupHandle && <JoinPopup />}
      {popupHandleCreate && <CreatePopup />}
      {chatHandler && <Chat2 />}
    </div>
  );
}
