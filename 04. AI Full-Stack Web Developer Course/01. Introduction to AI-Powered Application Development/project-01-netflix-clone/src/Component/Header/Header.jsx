import logo from "../../assets/image/logo.png"; 
import {Link} from 'react-router-dom'
function Header (){
    return (
        <header>
           <div>
            <img src={logo} alt="logo" />
            <nav>
             <Link href="/">Home</Link>
             <Link href="/">Tv Shows</Link>
             <Link href="/">Movies</Link>
             <Link href="/">New & Popular</Link>
             <Link href="/">My List</Link>
             <Link href="/">Browse in your language</Link>
            </nav>
            <div> 
                <div><button></button></div>
                <button><span>4</span></button>
                <div><button></button></div>
            </div>
           </div>
        </header>
    );
}
export default Header;