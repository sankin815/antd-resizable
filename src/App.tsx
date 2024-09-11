import ModalDemo from "./pages/ModalDemo";
import { RenderWhen, ResizeModal } from "src/components";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ModalDemo />
      <ResizeModal />
      <RenderWhen when>2222</RenderWhen>
    </div>
  );
}

export default App;
