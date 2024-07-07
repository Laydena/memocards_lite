import style from './cardtranslation.module.css';
import { useState, useEffect, useRef } from 'react';

export default function CardTranslation(props) {



    return (
        <>

            <div className={style.wrapper}>
                <div className={style.card_cover}>
                    <span className={style.card_russian}>{props.russian}</span>

                    <input ref={input => input && input.focus()} type='button' value='Я знаю это слово' className={style.btn} onClick={props.handleWordIsLearned} />

                </div>

            </div>

        </>
    )
}