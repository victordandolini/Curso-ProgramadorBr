import React from "react";


function Menu(props){

    const listLinks = props.links.map(link=><li>{link}</li>)

    return(
        <ul className="Menu">
       {listLinks}
      </ul>
    )
}
export default   Menu