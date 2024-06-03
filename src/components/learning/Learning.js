import LeftArrow from '../arrow/LeftArrow.js';
import RightArrow from '../arrow/RightArrow.js';
import Card from '../card/Card.js';
import CardTranslation from '../cardTranslation/CardTranslation.js';
import data from '../../data/Data.json';
import React, { useState } from 'react';
import style from './learning.module.css';




export default function Learning() {

    const [cardTurnoverClicked, setCardTurnoverClicked] = useState(false);

    const handleCardTurnoverClicked = () => {
        setCardTurnoverClicked(!cardTurnoverClicked)
    }

    return (
        <div className={style.wrapper}>
            <LeftArrow />
            {cardTurnoverClicked
                ?
                <button className={style.card_button} onClick={handleCardTurnoverClicked}>
                    < CardTranslation
                        russian={data[0].words[0].russian}
                    />
                </button>
                :
                <button className={style.card_button} onClick={handleCardTurnoverClicked}>
                    < Card
                        english={data[0].words[0].english}
                        transcription={data[0].words[0].transcription}
                    />
                </button>
            }
        <RightArrow />


        </div>


    )

}
