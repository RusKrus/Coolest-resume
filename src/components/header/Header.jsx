import styles from "./header.module.css";
import Menu from '../menu/Menu';
import { useRef } from 'react';

const Header = () =>{
    const menuButtonRef = useRef(null);
    const handleClick = () =>{
        
        if(menuButtonRef.current.style.width === "0%"){
            menuButtonRef.current.style.width = "100%";
            menuButtonRef.current.style.height = "100%"
        }
        else{
            menuButtonRef.current.style.width = "0%";
            menuButtonRef.current.style.height = "0%"
        }
        
    }
    return (
        <header className = {styles.header}>
            <button className = {styles.menuButton} onClick = {handleClick} >
                <div className = {styles.menuIcon}></div>
            </button>
            <Menu ref = {menuButtonRef} />
            <h1 className = {styles.title}>The coolest resume</h1>
        </header>

    )
}

export default Header;