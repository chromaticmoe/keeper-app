import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

export default function CreateArea(props) {
    const [inputText, setInputText] = useState({
        title: "",
        content: ""
    });

    const [isClicked, setIsClicked] = useState(false)

    function handlerChange(event) {
        const {name, value} = event.target

        setInputText((prevValue)=> {
            return {...prevValue, [name]: value}
        })
    }
    
    function textAreaClick(){
      setIsClicked(true);
    }

    return (
      <div>
        <form className="create-note">
          {isClicked && <input 
            onChange={handlerChange} 
            name="title" 
            placeholder="Title" 
            value={inputText.title}
          />
          }

          <textarea 
            onChange={handlerChange} 
            name="content" 
            placeholder="Take a note..." 
            rows={isClicked ? 3 : 1 } 
            value={inputText.content}
            onClick={textAreaClick}
          />
          <Zoom in={isClicked ? true : false}>
            <Fab onClick={(event)=> {
              props.onCreate(inputText);
              event.preventDefault();
              setInputText({title: "", content:""});
            }}>
             <AddIcon />
            </Fab>
            </Zoom>
        </form>
      </div>
    );
  }