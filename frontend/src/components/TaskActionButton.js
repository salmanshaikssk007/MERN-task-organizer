import { Icon } from "@mui/material";
import React , { useState } from "react"
import TextareaAutosize from 'react-textarea-autosize';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';



function TaskActionButton(props) {

    // state for is form open
    const [IsFormOpen, setIsFormOpen] = useState(false);
    const [text , setText] = useState("");
    // to grab the list
    const list  = !(Array.isArray(props.list));
    // function to render button when state is false
    const renderAddButton = () =>{
        
        const buttonText = list ? 'Add another card' : 'Add another list' ;
        // styles
        const buttonTextOpacity = list ? 1 : 0.5;
        const buttonTextColor = list ? "white" : "inherit";
        const buttonTextBackground = list ? "rgba(0,0,0,.15)" : "inherit";
        // styles - end
        // handlers
        const openFormHandler = () =>{
            setIsFormOpen(true);
        }

        return (
            <div onClick={openFormHandler} style={{
                ...styles.openFormButtonGroup,
                opacity : buttonTextOpacity ,
                color : buttonTextColor ,
                backgroundColor: buttonTextBackground,
            }}>
                <Icon>add</Icon>
                <p>{buttonText}</p>
            </div>
        )
    }
   
    // if form is open then execute this funciton
    const renderForm  = () =>{

        const placeHolder = list ? 'Enter card title' : 'Enter list title';
        const buttonTag = list ? 'Add card' : 'Add List';
        
        // eventHandlers
        const closeFormHandler = ()=>{
            setIsFormOpen(false);
        }
        const onInputChangeHandler = e =>{
            setText(e.target.value)
        }
        const handleAddList = () =>{

        }
        const handleAddCard = () =>{

        }

        return (
            <div>
                <Card style={{
                    minHeight: 85,
                    minWidth: 272,
                    padding: "6px 8px 2px"
                }}>
                    <TextareaAutosize placeholder={placeHolder}
                        autoFocus
                        onBlur={closeFormHandler}
                        value={text}
                        onChange={onInputChangeHandler}
                        style={{
                        resize: "none",
                        width: "100%",
                        overflow: "hidden",
                        outline: "none",
                        border: "none"
                 }} />
               </Card>
               <div style={styles.formButtonGroup}>
                    <Button
                        onMouseDown={list ? handleAddList : handleAddCard}
                        variant="contained"
                        style={{ color: "white", backgroundColor: "#5aac44" }}
                    >
                        {buttonTag}{" "}
                    </Button>
                    <Icon style={{ marginLeft: 8, cursor: "pointer" }}>close</Icon>
                </div>
            </div>
        );
    }
    // return to Vitual DOM
    return (
        <div>
         {IsFormOpen ? renderForm() : renderAddButton()}
        </div>
    )
}
const styles = {
    openFormButtonGroup: {
      display: "flex",
      alignItems: "center",
      cursor: "pointer",
      borderRadius: 3,
      height: 36,
      width: 272,
      paddingLeft: 10 ,
      margin : 8 
    },
    formButtonGroup: {
      marginTop: 8,
      display: "flex",
      alignItems: "center"
    }
  };

export default TaskActionButton
