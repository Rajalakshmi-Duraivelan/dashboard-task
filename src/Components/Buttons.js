
import { Base } from "../Core/Base";

export function Buttonpage(){
    return(
        <Base>
        <div className="btn-page">
            <div className="btns card-component">
                <p style={{fontSize:"12px", fontWeight:"bold"}}>Regular Buttons</p>{" "}
                <button style={{backgroundColor:"royalblue", color:"white", fontSize:"2rem"}}className="btns-regular">f</button>
                <button style={{backgroundColor:"black",color:"red", fontSize:"2rem"}}className="btns-regular">♥</button>
                <button style={{backgroundColor:"yellow",color:"black", fontSize:"2rem"}}className="btns-regular">☻</button>
                <button style={{backgroundColor:"red",color:"black", fontSize:"2rem"}}className="btns-regular">☺</button>
            </div>
            <div className="btns card-component">
                <p style={{fontSize:"12px", fontWeight:"bold"}}>Small    Buttons</p>
                <button style={{backgroundColor:"royalblue", color:"white", fontSize:"1rem"}}className="btns-small">f</button>
                <button style={{backgroundColor:"black",color:"red", fontSize:"1rem"}}className="btns-small">♥</button>
                <button style={{backgroundColor:"yellow",color:"black", fontSize:"1rem"}}className="btns-small">☻</button>
                <button style={{backgroundColor:"red",color:"black", fontSize:"1rem"}}className="btns-small">☺</button>
            </div>
            
            <div className="btns card-component">
                <p style={{fontSize:"12px", fontWeight:"bold"}}>LargeButtons</p>
                <button style={{backgroundColor:"royalblue", color:"white", fontSize:"3rem"}}className="btns-large">f</button>
                <button style={{backgroundColor:"black",color:"red", fontSize:"3rem"}}className="btns-large">♥</button>
                <button style={{backgroundColor:"yellow",color:"black", fontSize:"3rem"}}className="btns-large">☻</button>
                <button style={{backgroundColor:"red",color:"black", fontSize:"3rem"}}className="btns-large">☺</button>
            </div>
        </div>
        </Base>
    )
}