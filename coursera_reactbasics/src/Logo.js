
import image from './logo3.png';
function Logo() {
    const style ={
        "display": "block",
        "width": "400px",
        "height": "600px",
        "margin": "auto"
        }
    const userPicstyle = {
        "margin-top" : "20px"
    }
    const userPic = <img src={image} alt="No Logo" style={style} />

    return (
        
        <div>
            {userPic}
            <p style={userPicstyle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, qui!</p>
        </div>

    )
}

export default Logo;