
const Showcase = ({name,image,link,message}) => {
    return (
        <div>
            <div>
                <br/><br/><br/><br/><br/><br/>
                <img className = "logo" src = {image} alt = {"logo"}/>
                <br/><br/> <br/>
                <div className = "containerCSS">
                <p>{message}</p>
                </div>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <a className = "linkCSS"href = {link} target = {"_blank"}>Explore Careers at {name}</a>

            </div>
        </div>
    )
}

export default Showcase
