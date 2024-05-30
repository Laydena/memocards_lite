import styles from './wordlineeditable.module.css';
import saveIcon from '../../assets/images/icons/save-icon.png';
import cancelIcon from '../../assets/images/icons/cancel-icon.png';


export default function WordlineEditable(props) {
    return (
        <div className={styles.line}>


            <div className={styles.span_editable} contenteditable="true">
                <span >{props.english}</span >
            </div>
            <div className={styles.span_editable} contenteditable="true">
                <span>{props.transcription}</span>
            </div>
            <div className={styles.span_editable} contenteditable="true">
                <span>{props.russian}</span>
            </div>

            <div className={styles.icons}>
                <button className={styles.btn}>
                    <img src={saveIcon} alt='иконка сохранить'></img>
                </button>
                <button className={styles.btn}>
                    <img src={cancelIcon} alt='иконка отменить изменения'></img>
                </button>

            </div>



        </div>
    )
}