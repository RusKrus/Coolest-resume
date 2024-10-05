import styles from "./menu.module.css";
import { forwardRef } from 'react';

const Menu = forwardRef(function Menu(props, ref){
    return (
        <nav className = {styles.menu} ref = {ref}>
            <ul className = {styles.options}>
                <li ><a href = "later" className = {styles.option}>Навыки</a></li>
                <li ><a href = "later" className = {styles.option}>Обо мне</a></li>
                <li ><a href = "later" className = {styles.option}>Проэкты</a></li>
                <li ><a href = "later" className = {styles.option}>Контакты</a></li>
            </ul>
        </nav>
        
    )
})


export default Menu;