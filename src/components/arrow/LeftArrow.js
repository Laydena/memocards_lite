import leftArrow from '../../assets/images/icons/left-arrow.png';
import style from './leftarrow.module.css'

export default function LeftArrow() {
    return (
        <button className={style.arrow_button} >
            <img src={leftArrow} alt="предыдущее слово" />
        </button >
    )
}