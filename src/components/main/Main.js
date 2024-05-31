import Chapter from '../chapter/Chapter.js';
import Wordslist from '../wordsList/WordsList.js';
import Card from '../card/Card.js';
import data from '../../data/Data.json';


export default function Main() {
    return (
        <main className='main'>
            <Chapter />
            <Wordslist />

            < Card
                english={data[0].words[0].english}
            />


        </main>
    )
}