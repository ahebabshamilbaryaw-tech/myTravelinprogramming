import {useState} from 'react'
import logo from "../../assets/image/logo.png"; 
import {Link} from 'react-router-dom'
import {Search, Bell, User, ChevronDown} from 'lucide-react'
import styles from './Header.module.css'
function Header (){
    return (
        <header className={styles.header}>
           <div className={styles.container}>
            <img className={styles.logo} src={logo} alt="logo" />
            <nav className={styles.nav}>
             <Link className={styles.navLink} href="/">Home</Link>
             <Link className={styles.navLink}  href="/">Tv Shows</Link>
             <Link className={styles.navLink}  href="/">Movies</Link>
             <Link className={styles.navLink}  href="/">New & Popular</Link>
             <Link className={styles.navLink}  href="/">My List</Link>
             <Link className={styles.navLink}  href="/">Browse in your language</Link>
            </nav>
            <div className={styles.rightSide}> 
                <div className={styles.searchContainer}>
                    <button className={styles.searchButton}>
                        <Search size={20} />
                    </button>
                </div>
                <button className={styles.notificationButton}><Bell size={20} />
                <span className={styles.notificationCount}>4</span></button>
                <div className={styles.profileContainer}>
                    <button className={styles.profileButton}> 
                        <div className={styles.profileIcon}><User size={20} /></div>
                    <ChevronDown  size={20}/>
                    </button></div>
            </div>
           </div>
        </header>
    );
}
export default Header;