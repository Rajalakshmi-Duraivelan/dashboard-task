
import { useState } from "react";
import { useHistory } from "react-router-dom";

export function Sidebar(){
    const [showComp,setShowComp] = useState(false);
    const [showUtility,setShowUtilty] = useState(false);
    const [showAddOns, setShowAddOns] = useState(false);
    
    const history = useHistory();
    return(
        <div className="side-bar">
            <button className="side-bar-btn"
            onClick={()=>{history.push("/dashboard")}}>
                Dashboard
                <hr/>
            </button>
            <p className="child-name">INTERFACE</p>
            <button className="side-bar-btn"
            onClick={() => setShowComp(!showComp)}>
                Components {showComp ? "►" : "▼"}
            </button>

            {showComp ? (
                <div className="comp-child">
                    <p className="child-name">CUSTOM-COMPONENTS:</p>
                    <button className="child-btn"
                    onClick={()=>{history.push("/buttons")}}>Buttons</button>
                    <button className="child-btn"
                    onClick={()=>{history.push("/cards")}}>Cards</button>
                </div>
            ) : (" ")}

            <button className="side-bar-btn"
            onClick={() => setShowUtilty(!showUtility)}>
                Utilities {showUtility ? "►" : "▼"}
            </button>

            {showUtility ? (<div className="comp-child">
                <p className="child-name">UTILITIES:</p>
                <button className="child-btn" onClick={()=>{history.push("/colors")}}>Colors</button>
                <button className="child-btn" onClick={()=>{history.push("/borders")}}>Borders</button>
            </div>) : (" ")}

            <button className="side-bar-btn"> <hr/> </button>
            <p className="child-name">ADDONS</p>
            <button className="side-bar-btn"
            onClick={() => setShowAddOns(!showAddOns)}>
                Pages {showAddOns ? "►" : "▼"}
            </button>

            {showAddOns ? (<div className="comp-child">
                <p className="child-name">LOGIN SCREENS:</p>
                <button className="child-btn" onClick={()=>{history.push("/login")}}>Login</button>
                {/* <button className="child-btn" onClick={()=>{history.push("/register")}}>Register</button>
                <button className="child-btn" onClick={()=>{history.push("/forgot-password")}}>Forgot Password</button> */}
                <p className="child-name">OTHER PAGES:</p>
                <button className="child-btn" onClick={()=>{history.push("/no-page")}}>404 Page</button>
                <button className="child-btn" onClick={()=>{history.push("/blank-page")}}>Blank Page</button>
            </div>) : (" ")}

            <button className="side-bar-btn"
            onClick={()=>{history.push("/dashboard")}}>
                Charts
            </button>

            <button className="side-bar-btn"
            onClick={()=>{history.push("/dasboard")}}>
                Tables
                <hr/>
            </button>
        </div>
    )
}