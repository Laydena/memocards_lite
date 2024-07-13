import styles from './wordlineeditable.module.css';

import { useForm } from "react-hook-form";
import { useState } from 'react';


export default function WordlineEditable({ english, transcription, russian, handleAddBtnClicked }) {
    // const [inputEnglishValue, setInputEnglishValue] = useState(english)
    // const handleChangeInputEnglishValue = (e) => {
    //     setInputEnglishValue(e.target.value)
    // }

    // const [inputTranscriptionValue, setInputTranscriptionValue] = useState(transcription)
    // const handleChangeInputTranscriptionValue = (e) => {
    //     setInputTranscriptionValue(e.target.value)
    // }

    // const [inputRussianValue, setInputRussianValue] = useState(russian)
    // const handleChangeInputRussianValue = (e) => {
    //     setInputRussianValue(e.target.value)
    // }

    const [state, setState] = useState({
        english: english,
        transcription: transcription,
        russian: russian
    })
    const handleChange = (e) => {
        const value = e.target.value
        console.log(e.target.name)
        setState({ [e.target.name]: value })
    }

    const { register, handleSubmit, reset, watch, formState: { errors, isValid } } = useForm({
        mode: 'onBlur'
    });
    const onSubmit = (data) => {
        alert(JSON.stringify(data));
        reset();
    }


    return (
        <form
            className={styles.line}
            onSubmit={handleSubmit(onSubmit)}>


            <div className={styles.english}>

                <input {...register('english', {
                    required: "*обязательное поле", pattern: /^[A-Za-z]+$/i
                })}
                    className={errors?.english?.message ? styles["error"] : "no-error"}
                    value={english}
                    placeholder='слово'
                    onChange={handleChange} />
                <div className={styles.error}>{errors?.english && <p>{errors?.english?.message || 'только латиница'}</p>}</div>
            </div>
            <div className={styles.transcription}>

                <input {...register('transcription', {
                    required: "*обязательное поле",
                })}
                    className={errors?.transcription?.message ? styles["error"] : "no-error"}
                    type='text'
                    value={transcription}
                    placeholder='транскрипция'
                    onChange={handleChange} />
                <div className={styles.error}>{errors?.transcription && <p>{errors?.transcription?.message || 'Ошибка'}</p>}</div>

            </div>
            <div className={styles.russian}>

                <input
                    {...register('russian', {
                        required: "*обязательное поле", pattern: /^[А-яЁё]+$/i
                    })}
                    className={errors?.russian?.message ? styles["error"] : "no-error"}
                    type='text'
                    value={russian}
                    placeholder='перевод'
                    onChange={handleChange} />
                <div className={styles.error}>{errors?.russian && <p>{errors?.russian?.message || 'только кириллица'}</p>}</div>
            </div>
            <div className={styles.icons}>

                <input type="submit"
                    className={styles.btn}
                    value='сохранить'
                    disabled={!isValid}
                />
                <button
                    className={styles.btn}
                    onClick={handleAddBtnClicked}
                >отменить
                </button>
            </div>




        </form>
    )
}