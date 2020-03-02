import styles from './css/home.module.css'
import Link from 'next/link'
function HomePage() {
    return <div>
        <div className={styles.header}>klickrent</div>
        <div className={styles.wrapper}>
            <Link href="/modal">
                <a className={styles.button}>Start inquiry</a>
            </Link>
        </div>
    </div>
}

export default HomePage