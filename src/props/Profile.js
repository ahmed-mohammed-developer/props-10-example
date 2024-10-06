export default function Profile(props){
    return(
        <>
        <div>
            <h1>{props.name}</h1>
            <p>Age: {props.age}</p>
        </div>
        </>
    )
}