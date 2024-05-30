import styles from './chapter.module.css'

export default function Chapter() {
    return (
        <div className={styles.container}>
            <div className={styles.name}>
                <span className={styles.title}>Фрукты</span>
                <br></br>
                <span className={styles.subtitle}>список слов</span>
            </div>
        </div >
    )
}