import style from './card.module.css';

export default function Card(props) {
    return (
        <>
            <div className={style.wrapper}>
                <div className={style.card_cover}>
                    <p className={style.card_englsh}>{props.english}</p>
                </div>
            </div>
        </>
    )
}