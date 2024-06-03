import rightArrow from '../../assets/images/icons/right-arrow.png';
import style from './rightarrow.module.css'

export default function RightArrow() {
    return (
        <button className={style.arrow_button} >
            <img src={rightArrow} alt="следующее слово" />
        </button >
    )
}