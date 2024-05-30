import plusIcon from '../../assets/images/icons/plus.png';
import styles from './addwordbtn.module.css';

export default function AddWordBtn() {
    return (

        <button className={styles.add_btn} >
            <img src={plusIcon} className={styles.add_icon} alt='иконка добавить слово'></img>
            Добавить слово
        </button >

    )
}