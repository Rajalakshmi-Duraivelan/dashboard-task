
import { Base } from "../Core/Base"

export function BlankPage(){
    return(
        <Base>
            <div className="blankpage"> 
                <h1>This is a Blank Page</h1>
                {/* <button
                    onClick={() => history.push("/dashboard")}>
                    Go to Dashboard
                </button> */}
            </div>
        </Base>
    )
}