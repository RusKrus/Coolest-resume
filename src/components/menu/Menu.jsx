import styles from "./menu.module.css";
import { useState} from 'react';

const Menu = () =>{
    const [ menuOpened, setMenuOpened ] = useState(false);
    const handleClick = () =>{
        setMenuOpened(!menuOpened);
    }
    return (
        <>
            <button className = {`${styles.menuButton} ${menuOpened? styles.close: styles.open}`} onClick = {handleClick}>
                <div className = {styles.menuIcon}></div>
            </button>
            <nav className = {`${styles.menu} ${menuOpened? styles.opened: styles.closed}` }>
                <ul className = {styles.options}>
                    <li ><a href = "later" className = {styles.option}>Навыки</a></li>
                    <li ><a href = "later" className = {styles.option}>Обо мне</a></li>
                    <li ><a href = "later" className = {styles.option}>Проэкты</a></li>
                    <li ><a href = "later" className = {styles.option}>Контакты</a></li>
                </ul>
            </nav>
        </>
    )
}


export default Menu;