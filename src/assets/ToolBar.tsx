import ToolButton from "./toolButton";

export default function ToolBar() {

    return(
        <div className="border-bottom p-3">
            <span>
                <ToolButton/>
                <ToolButton/>
            </span>
        </div>
    )
}