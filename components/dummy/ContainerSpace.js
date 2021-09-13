export default function ContainerSpace({children,url}) {
    return (
        <div id={url}  style={{ width:"100%", height:"600px", fontSize:"10rem", padding:"5rem"}}>
            {children}
        </div>
    )
}
