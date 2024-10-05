import styles from "./header.module.css";
import Menu from '../menu/Menu';
import { useRef } from 'react';

const Header = () =>{
    const menuButtonRef = useRef(null);

    return (
        <header className = {styles.header}>
            <Menu ref = {menuButtonRef} />
            <h1 className = {styles.title}>The coolest resume</h1>
        </header>

    )
}

export default Header;