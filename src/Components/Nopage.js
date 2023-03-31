import { useHistory } from "react-router-dom"
import { Base } from "../Core/Base"

export function NoPage(){
    const history = useHistory();
    return(
        <Base>
            <div className="nopage">
                <h1>404 Page Not Found</h1>
                <button
                    onClick={() => history.push("/")}>
                    Go to Dashboard
                </button>
            </div>
        </Base>
    )
}