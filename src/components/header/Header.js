import userIcon from '../../assets/images/icons/user1.png';
import mainlogo from '../../assets/main-logo.svg';

import styles from './header.module.css';



import { Link } from "react-router-dom";


export default function Header() {
    return (

        <header className={styles.header}>
            <div className={styles.container} >

                <div className="logotype">
                    <img src={mainlogo} alt="логотип"></img>
                </div>

                <div className={styles.btn_wordslist} >
                    <Link to="/" className={styles.a}>Список слов</Link>
                </div>

                <div className={styles.btn_learning}>
                    <Link to="/learning" className={styles.a}>Учить</Link>
                </div>


                <div className="user_icon">
                    <img src={userIcon} alt="иконка пользователя"></img>
                </div>





            </div>
        </header>

    )
}


