import styles from './Header.module.css'
import { Ubuntu_Mono } from "next/font/google";

const ubuntuMono = Ubuntu_Mono({subsets: ['latin'], weight: '400'})

interface HeaderProps {
    pageTitle: string,
    subTitle: string
}

const Header = ({pageTitle, subTitle}:HeaderProps) => {
    return(
        <header className={styles.header}>
            <h1 className={`${styles.pageTitle} ${ubuntuMono.className}`}>{pageTitle}</h1>
            <h3 className={styles.subTitle}>{subTitle}</h3>
        </header>
    )
}

export default Header