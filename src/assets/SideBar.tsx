/* importing miniview and dummy data */
import MiniView from "./MiniView";
import testSauna from "./Saunas"

/* sidebar is calling in 4 miniview components and passing props to those components */
export default function SideBar (){
    return (
        <div className="border rounded p-3 flex-column">
        
        <MiniView sauna={testSauna[0]}/>
        <MiniView sauna={testSauna[1]}/>
        <MiniView sauna={testSauna[2]}/>
        <MiniView sauna={testSauna[3]}/>
        
        </div>
    )
}