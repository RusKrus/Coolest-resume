import styles from "./header.module.css";

const Header = () =>{
    return (
        <header className = {styles.header}>
            <div className = {styles.menuButton}></div>
            <h1 className = {styles.title}>The coolest resume</h1>
        </header>
    )
}

export default Header;