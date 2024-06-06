import styles from './wordline.module.css';

export default function WordlineView(props) {
    return (

        <div className={styles.line}>

            <div className={styles.english}>
                <span>{props.english}</span >
            </div>
            <div className={styles.transcription}>
                <span>{props.transcription}</span>
            </div>
            <div className={styles.russian}>
                <span>{props.russian}</span>
            </div>


        </div>

    )
}

