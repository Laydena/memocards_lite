import Wordline from '../wordline/Wordline.js';
import data from '../../data/Data.json';
import WordlineEditable from '../wordlineeditable/WordlineEditable.js';
import AddWordBtn from '../addWordBtn/AddWordBtn.js';
import style from './wordslist.module.css';

import editIcon from '../../assets/images/icons/edit-icon.png';
import deleteIcon from '../../assets/images/icons/delete-icon.png';
import { useState, useEffect } from 'react';

export default function Wordslist() {
    const [editStates, setEditStates] = useState({});

    const handleLineEditClicked = (id) => {
        setEditStates((prevState) => ({
            ...prevState,
            [id]: !prevState[id],
        }));
    };

    const [words, setWords] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch('http://itgirlschool.justmakeit.ru/api/words')
            .then(response => {
                if (response.ok) { //Проверяем, что код ответа 200
                    return response.json();
                } else {
                    throw new Error('Something went wrong ...');
                }
            })
            .then((response) => {
                setWords(response)
                setLoading(false)
            })
            .catch(error => setError(error));
    })

    return (
        <>
            {loading ?
                (<p>Loading ...</p>)
                :
                (<div className="cards-container" id="cards-container">
                    {words.map((word) =>
                        editStates[word.id]
                            ? (
                                <div className={style.line_editable} key={word.id}>
                                    <WordlineEditable
                                        english={word.english}
                                        transcription={word.transcription}
                                        russian={word.russian} />

                                </div>
                            )
                            : (
                                <div className={style.line} key={word.id}>
                                    <Wordline {...word} />
                                    <div className={style.icons}>
                                        <button className={style.btn} onClick={() => handleLineEditClicked(word.id)}>
                                            <img src={editIcon} alt="иконка редактировать"></img>
                                        </button>
                                        <button className={style.btn}>
                                            <img src={deleteIcon} alt="иконка удалить"></img>
                                        </button>
                                    </div>
                                </div>
                            ),
                    )}
                </div>)}

            <div className={style.center}>
                <AddWordBtn />
            </div>
        </>
    );
}