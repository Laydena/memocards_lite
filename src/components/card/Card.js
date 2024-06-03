import style from './card.module.css';

export default function Card(props) {
    return (
        <>

            <div className={style.wrapper}>
                <div className={style.card_cover}>
                    <span className={style.card_englsh}>{props.english}</span>
                    <span className={style.card_transcription}>{props.transcription}</span>
                </div>
            </div>

        </>
    )
}