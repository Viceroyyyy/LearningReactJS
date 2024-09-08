import { useState } from "react";
function ModeToggler(){

    let [darkmodeOn,setdarkmodeOn] = useState('false');
    const darkMode = <h1>Dark Mode is on!</h1>
    const lightMode = <h1>Light Mode is on!</h1>
    function clickHandler(){
        setdarkmodeOn(!darkmodeOn);
        
    }
    return(<div>
        <button onClick={clickHandler}>Darkmode</button>
        {darkmodeOn ? darkMode : lightMode}
    </div>   
    );
}
export default ModeToggler;