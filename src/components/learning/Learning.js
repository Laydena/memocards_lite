// import LeftArrow from '../arrow/LeftArrow.js';
// import RightArrow from '../arrow/RightArrow.js';
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


    let [wordIndex, setWordIndex] = useState(0);

    let activeCard = data[wordIndex];


    const handleNextCard = () => {
        wordIndex < data.length - 1
            ? setWordIndex(wordIndex++)
            : setWordIndex(wordIndex = 0)
        setCardTurnoverClicked(false);


    }
    const handlePreviousCard = () => {
        wordIndex > 0
            ? setWordIndex(wordIndex--)
            : setWordIndex(data.length - 1)
        setCardTurnoverClicked(false);

    }

    return (
        <div className={style.wrapper}>
            <button onClick={handlePreviousCard}>пред</button>

            {cardTurnoverClicked
                ?
                <button className={style.card_button} onClick={handleCardTurnoverClicked}>
                    < CardTranslation
                        russian={activeCard.russian}
                    />
                </button>
                :
                <button className={style.card_button} onClick={handleCardTurnoverClicked}>
                    < Card
                        english={activeCard.english}
                        transcription={activeCard.transcription}
                    />
                </button>
            }
            <button onClick={handleNextCard}>след</button>


        </div>


    )

}
