import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import {useState} from "react"


export default function App() {
    const [noteItems, setNoteItems] = useState([]);

    function addNoteItems(inputText) {
        setNoteItems((prevNoteItems) => {
            return [...prevNoteItems, inputText]
        })
    }

    function deleteNoteItems(id) {
        setNoteItems((prevNoteItems)=> {
            return prevNoteItems.filter((notes, index)=> {
                return index !== id;
            }) 
               
        });
    }

    return(
        <div>
            <Header />
            <CreateArea onCreate={addNoteItems}/>
            {noteItems.map((notes, index)=> {
                return <Note 
                    key={index} 
                    id={index}
                    title={notes.title} 
                    content={notes.content} 
                    onDelete={deleteNoteItems}
                />
            })}
            <Footer />
        </div>
    );
}