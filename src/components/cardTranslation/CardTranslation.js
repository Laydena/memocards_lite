import style from './cardtranslation.module.css';

export default function CardTranslation(props) {
    return (
        <>

            <div className={style.wrapper}>
                <div className={style.card_cover}>
                    <span className={style.card_russian}>{props.russian}</span>
                </div>

            </div>

        </>
    )
}