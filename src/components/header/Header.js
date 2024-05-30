import userIcon from '../../assets/images/icons/user1.png';
import mainlogo from '../../assets/main-logo.svg';

import styles from './header.module.css';
import Button from '../button/Button.js';
import themeBtn from '../button/themeBtn.module.css';


export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container} >
                <div className="logotype">
                    <img src={mainlogo} alt="логотип"></img>
                </div>
                <div >
                    <Button
                        theme={themeBtn.btn_wordslist}
                        title="Список" />
                </div>

                <div >
                    <Button
                        theme={themeBtn.btn_learning}
                        title="Учить" />
                </div>
                <div className="user_icon">
                    <img src={userIcon} alt="иконка пользователя"></img>
                </div>
            </div>
        </header>
    )
}