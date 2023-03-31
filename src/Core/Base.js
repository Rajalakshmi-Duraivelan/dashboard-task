
import SearchComponent from "react-material-ui-searchbar";


export function Base({children}){
    return(
        <div className="base">
            <div className="search-bar">
                <SearchComponent />                
            <hr/>
            </div>            
            <div className="children">
               {children} 
            </div>
        </div>
    )
}