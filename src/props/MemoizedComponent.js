import React from "react"

const MemoizedComponent = React.memo(function(props){
    return(
        <>
        <p>{props.text}</p>
        </>
    )
})

export default MemoizedComponent;
