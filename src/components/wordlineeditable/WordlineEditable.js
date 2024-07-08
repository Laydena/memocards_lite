import styles from './wordlineeditable.module.css';

import { useState } from 'react';


export default function WordlineEditable({ english, transcription, russian }) {
    const [inputEnglishValue, setInputEnglishValue] = useState(english)
    const handleChangeInputEnglishValue = (event) => {
        setInputEnglishValue(event.target.value)
    }

    const [inputTranscriptionValue, setInputTranscriptionValue] = useState(transcription)
    const handleChangeInputTranscriptionValue = (event) => {
        setInputTranscriptionValue(event.target.value)
    }

    const [inputRussianValue, setInputRussianValue] = useState(russian)
    const handleChangeInputRussianValue = (event) => {
        setInputRussianValue(event.target.value)
    }

    return (
        <div className={styles.line}>


            <div className={styles.english}>
                <input className={styles.input_editable}
                    type='text'
                    value={inputEnglishValue}
                    onChange={handleChangeInputEnglishValue} />
            </div>
            <div className={styles.transcription}>

                <input className={styles.input_editable}
                    type='text'
                    value={inputTranscriptionValue}
                    onChange={handleChangeInputTranscriptionValue} />

            </div>
            <div className={styles.russian}>
                <input className={styles.input_editable}
                    type='text'
                    value={inputRussianValue}
                    onChange={handleChangeInputRussianValue} />
                {/* <span>{props.russian}</span> */}
            </div>





        </div>
    )
}