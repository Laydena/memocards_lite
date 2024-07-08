import plusIcon from '../../assets/images/icons/plus.png';
import styles from './addwordbtn.module.css';
import WordlineEditable from '../wordlineeditable/WordlineEditable';
import saveIcon from '../../assets/images/icons/save-icon.png';
import cancelIcon from '../../assets/images/icons/cancel-icon.png';
import { useState } from 'react';


export default function AddWordBtn() {
    const [addBtnClicked, setAddBtnClicked] = useState(false);

    const handleAddBtnClicked = () => {
        setAddBtnClicked(!addBtnClicked)
    };

    return (
        <>
            {addBtnClicked
                ? (
                    <div className={styles.line_editable}>
                        < WordlineEditable />
                        <div className={styles.icons}>
                            <button className={styles.btn}>
                                <img src={saveIcon} alt="иконка сохранить"></img>
                            </button>
                            <button className={styles.btn}
                            >
                                <img src={cancelIcon} alt="иконка отменить изменения"></img>
                            </button>
                        </div>
                    </div>)
                : (
                    <p>Нажмите кнопку, чтобы добавить новое слово</p>)}

            <button className={styles.add_btn} onClick={() => handleAddBtnClicked()}>
                <img src={plusIcon} className={styles.add_icon} alt='иконка добавить слово'></img>
                &nbsp;&nbsp;Добавить слово
            </button >

        </>
    )
}