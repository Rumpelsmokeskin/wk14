import SaunaView from "./assets/SaunaView"
import SideBar from "./assets/SideBar"
import ToolBar from "./assets/toolBar"
import sauna from "./assets/Saunas"

export default function App() {
  return (
    <div className="d-flex vh-100 flex-column">
    <ToolBar />
      <div className="d-flex flex-grow-1">
      <SideBar/>
      <SaunaView sauna={sauna[1]}/>
      </div>
  </div>
  )
}