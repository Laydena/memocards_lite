import Chapter from '../chapter/Chapter.js';
import Wordslist from '../wordsList/WordsList.js';
// import Learning from '../learning/Learning.js';
import styles from "./main.module.css"




export default function Main() {



    return (
        <main className={styles.main}>
            <Chapter subtitle='список слов' />
            <Wordslist />
        </main>
    )
}