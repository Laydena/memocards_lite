import styles from './chapter.module.css'

export default function Chapter(props) {
    return (
        <div className={styles.container}>
            <div className={styles.name}>
                <span className={styles.title}>Фрукты</span>
                <br></br>
                <span className={styles.subtitle}>{props.subtitle}</span>
            </div>
        </div >
    )
}