import styles from './wordline.module.css';
import editIcon from '../../assets/images/icons/edit-icon.png';
import deleteIcon from '../../assets/images/icons/delete-icon.png';

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

            <div className={styles.icons}>
                <button className={styles.btn}>
                    <img src={editIcon} alt='иконка редактировать'></img>
                </button>
                <button className={styles.btn}>
                    <img src={deleteIcon} alt='иконка удалить'></img>
                </button>

            </div>



        </div>

    )
}

