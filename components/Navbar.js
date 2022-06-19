import Image from "next/image"
import Link from "next/link"
import styles from "../styles/Navbar.module.css"

export default function Navbar(){
    return(
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Image src="/images/pokeball.png" width="30" height="30" alt="pokerdex" />
                <h1>PokerNext</h1>
            </div>

            <ul>
                <li><Link href="/"><a>Home</a></Link></li>
                <li><Link href="/about"><a>Sobre</a></Link></li>
            </ul>
        </nav>
    )
}