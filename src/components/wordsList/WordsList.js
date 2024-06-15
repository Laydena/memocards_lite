import Wordline from '../wordline/Wordline.js';
import data from '../../data/Data.json';
import WordlineEditable from '../wordlineeditable/WordlineEditable.js';
import AddWordBtn from '../addWordBtn/AddWordBtn.js';
import style from './wordslist.module.css';

import editIcon from '../../assets/images/icons/edit-icon.png';
import deleteIcon from '../../assets/images/icons/delete-icon.png';
import saveIcon from '../../assets/images/icons/save-icon.png';
import cancelIcon from '../../assets/images/icons/cancel-icon.png';
import { useState } from 'react';

export default function Wordslist() {
    const [editStates, setEditStates] = useState({});

    const handleLineEditClicked = (id) => {
        setEditStates((prevState) => ({
            ...prevState,
            [id]: !prevState[id],
        }));
    };

    return (
        <>
            <div className="cards-container" id="cards-container">
                {data.map((item, id) =>
                    editStates[item.id]
                        ? (
                            <div className={style.line_editable} key={id}>
                                <WordlineEditable {...item} />
                                <div className={style.icons}>
                                    <button className={style.btn}>
                                        <img src={saveIcon} alt="иконка сохранить"></img>
                                    </button>
                                    <button className={style.btn} onClick={() => handleLineEditClicked(item.id)}>
                                        <img src={cancelIcon} alt="иконка отменить изменения"></img>
                                    </button>
                                </div>
                            </div>
                        )
                        : (
                            <div className={style.line} key={id}>
                                <Wordline {...item} />
                                <div className={style.icons}>
                                    <button className={style.btn} onClick={() => handleLineEditClicked(item.id)}>
                                        <img src={editIcon} alt="иконка редактировать"></img>
                                    </button>
                                    <button className={style.btn}>
                                        <img src={deleteIcon} alt="иконка удалить"></img>
                                    </button>
                                </div>
                            </div>
                        ),
                )}
            </div>

            <div className={style.center}>
                <AddWordBtn />
            </div>
        </>
    );
}