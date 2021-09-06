const Showcase = ({image,link,message}) => {
    const img  = {
        display: "inline",
        maxWidth:"100px",
        maxHeight:"100px",
        width: "auto",
        height: "auto",
        margin:"auto",

      }
      const text = {
        overflow:"hidden",
        margin:"auto",
      }
    return (
        <div>
            <div>
                <img style = {img} src = {image} alt = {"logo"}/>
                <br/>
                <br/>
                <p style = {text}>{message}</p>
                <br/>
                <br/>
                <a href = {link} target = {"_blank"}>Website Link</a>

            </div>
        </div>
    )
}

export default Showcase
