"use client";


import styles from "./Header.module.scss"
import Link from "next/link";
import Image from "next/image";

export default function Header() {
    return(
       < header className={styles.header}>
<div className={styles.logo}>
   <Image src="/icon.png" alt="logo" width={32} height={32}/>
    <span>SwapHub</span>
</div>

<nav className={styles.nav}>
<Link href="/" className={`${styles.link} ${styles.active}`}>Listings</Link>
<Link href="#" className={styles.link} >Community</Link>
<Link href="/contact" className={styles.link} >Contact</Link>
<Link href="#" className={styles.signin} >Sign in</Link>
<Link href="/register" className={styles.register} >Register</Link>

</nav>

  </header>
    );
}