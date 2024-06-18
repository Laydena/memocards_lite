// import LeftArrow from '../arrow/LeftArrow.js';
// import RightArrow from '../arrow/RightArrow.js';
import leftArrow from '../../assets/images/icons/left-arrow.png';
import rightArrow from '../../assets/images/icons/right-arrow.png';
import Card from '../card/Card.js';
import CardTranslation from '../cardTranslation/CardTranslation.js';
import data from '../../data/Data.json';
import React, { useState } from 'react';
import style from './learning.module.css';
import Chapter from '../chapter/Chapter.js';


export default function Learning() {

    const [cardTurnoverClicked, setCardTurnoverClicked] = useState(false);

    const handleCardTurnoverClicked = () => {
        setCardTurnoverClicked(!cardTurnoverClicked)
    }

    let [selectedCardIndex, setSelectedCardIndex] = useState(0);

    let activeCard = data[selectedCardIndex];

    const handleNextCard = () => {
        selectedCardIndex <= data.length - 1
            ? setSelectedCardIndex(selectedCardIndex++)
            : setSelectedCardIndex(selectedCardIndex = 0)
        setCardTurnoverClicked(false)

    }
    const handlePreviousCard = () => {
        selectedCardIndex >= 0
            ? setSelectedCardIndex(selectedCardIndex--)
            : setSelectedCardIndex(data.length - 1)
        setCardTurnoverClicked(false)
    }

    return (
        <>
            <Chapter subtitle='режим запоминания' />
            <div className={style.wrapper}>
                <button className={style.arrow_button} onClick={handlePreviousCard}>
                    <img src={leftArrow} alt="предыдущее слово" />
                </button>

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
                <button className={style.arrow_button} onClick={handleNextCard}>
                    <img src={rightArrow} alt="следующее слово" />
                </button>


            </div>
        </>


    )

}
