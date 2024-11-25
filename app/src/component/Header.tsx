import ToggleBtn from "./ToggleBtn"
import styles from './Header.module.css'
import Link from "next/link"

export default function Header() {
    return (
        <header className={styles.header}>
          <div className={['center', styles.container].join(' ')}>
            <Link href='/' tabIndex={1}>
              <h1>Where in the world?</h1>
            </Link>
            <ToggleBtn />
          </div>
        </header>
    )
}