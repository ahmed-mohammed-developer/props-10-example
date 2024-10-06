export default function Status(props) {
    return(
        <>
        <p>Status: {props.isOnline ? "online" : "offline"}</p>
        </>
    )
}