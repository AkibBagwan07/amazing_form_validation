import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import styles from "./formValidation.module.css"

const FormValidation = () => {
    const [userName,setUserName] = useState(null)
    const [password, setPassword] = useState(null)
    const [moveBtn, setMoveBtn] = useState(true)
    const [message,setMessage] = useState(null)
    const allowedUsernames = ["Akib", "Akki", "Akki007"]
    const passwordForUsername = "chal"

    const checkIfBtnToMove = () => { 
        if (allowedUsernames.includes(userName) && password === passwordForUsername) {
            setMoveBtn(false);
            setMessage("Correct Credentials")
        } else {
            setMoveBtn(true)
            if (userName === null || password === null)
                setMessage("Enter Credentials")
            else
                setMessage("Wrong Credentials")
         }
        }
    
    return (
        <form onSubmit={(e) =>e.preventDefault()}  className={styles.formParent}>
          <h1>Form Validation</h1>
          <TextField onChange={(e)=>setUserName(()=>e.target.value)} name='userName' id="standard-basic" label="User-Name" variant="standard" />
            <TextField onChange={(e) => {
                setPassword(e.target.value)
            }} name='password' id="standard-basic" label="Password" variant="standard" />
            {moveBtn ? <div><button onMouseOver={checkIfBtnToMove} className={styles.move}>Sign in</button><p>{ message}</p></div>
                : <div> <button onMouseOver={checkIfBtnToMove} type='submit' className={styles.DontMove}>Sign in</button><p>{message}</p></div>}
      </form>
  )
}

export default FormValidation