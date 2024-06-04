import Wordline from '../wordline/Wordline.js';
import data from '../../data/Data.json';
import WordlineEditable from '../wordlineeditable/WordlineEditable.js';
import AddWordBtn from '../addWordBtn/AddWordBtn.js';
import style from './wordslist.module.css';

export default function Wordslist() {
    console.log(data);

    return (
        <>
            <div className="cards-container" id="cards-container">
                {
                    data.map((item, index) => (

                        item.boolean
                            ? < Wordline
                                id={item.id}
                                english={item.english}
                                russian={item.russian}
                                transcription={item.transcription}
                                key={index} />
                            : <WordlineEditable
                                id={item.id}
                                english={item.english}
                                russian={item.russian}
                                transcription={item.transcription}
                                image={item.image}
                                key={index} />


                    ))
                }

            </div>

            <div className={style.center}>
                <AddWordBtn />
            </div>
        </>

    )
}