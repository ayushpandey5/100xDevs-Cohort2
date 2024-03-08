import {useState, useMemo} from 'react'

const words = ["hello", "my", "name", "is", "Ayush", "Hi!"];
const LINES = 1000;

const SENTENCES = []

for (let i= 0; i <= LINES; i++){
    let sentence = ""
    for (let j = 0; j < words.length; j++) {
        sentence += (words[Math.floor(words.length * Math.random())])
        sentence += " "
    }
    SENTENCES.push(sentence)
}


export function Assignment2_2() {
    const [sentences, setSentences] = useState(SENTENCES)
    const [filter, setFilter] = useState("")

    const filteredSentences = useMemo(() => {
        return sentences.filter(sentence => sentence.includes(filter));
    }, [sentences, filter]);

  return (<>
    <div>Assignment2_2</div>

    <input type='text' onChange={(e)=>{
        setFilter(e.target.value)
    }}></input>


    {filteredSentences.map(word => <div>
            {word}    
        </div>)}
    </>
  )
}
