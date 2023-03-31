import { Base } from "../Core/Base";

export function Border(){
    return(
        <Base>
            <div className="Utilities-Page">
                <div style={{ borderColor: "red", borderStyle: "dotted" }} className="border-element">
                    Dotted style border
                </div>
                <div style={{ borderColor: "black", borderStyle: "dashed" }} className="border-element">
                    Dashed style border
                </div>
                <div style={{ borderColor: "blue", borderStyle: "solid" }} className="border-element">
                    Solid style border
                </div>
                <div style={{ borderColor: "green", borderStyle: "double" }} className="border-element">
                    Double style border
                </div>
                <div style={{ borderColor: "orange", borderStyle: "groove" }} className="border-element">
                    Groove style border
                </div>
                <div style={{ borderColor: "aqua", borderStyle: "ridge" }} className="border-element">
                    Ridge style border
                </div>
                <div style={{ borderColor: "crimson", borderStyle: "inset" }} className="border-element">
                    Inset style border
                </div>
                <div style={{ borderColor: "yellow", borderStyle: "outset" }} className="border-element">
                    Outset style border
                </div>
            </div>
        </Base>
    )
}