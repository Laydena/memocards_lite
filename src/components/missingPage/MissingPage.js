import errorIcon from '../../assets/images/icons/error-page.png';
import styles from './missingpage.module.css';

export default function MissingPage() {
    return (
        <main>
            <div className={styles.error}>
                <img src={errorIcon} alt="Ошибка: страница не найдена" />
            </div>
            <h3 className={styles.title}>... но однажды она может появиться! Не теряйте надежды!</h3>
        </main>
    )
}