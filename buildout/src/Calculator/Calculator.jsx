import { useState } from "react";
import styles from "./Calculator.module.css";
export default function Calculator(){
    const arr = ["7","8","9","+","4","5","6","-","1","2","3","*","C","0","=","/"];
    const [userInput,setUserInput] = useState("");
    console.log(userInput);
    return(
        <div style={{height:"80vh",width:"100vh",display:"flex",alignItems:"center",flexDirection:"column",border:"1px solid blue"}}>
            <h1>React Calculator</h1>
            <div style={{width:"100%",display:"flex",alignContent:"center",justifyContent:"center"}}>
                <input placeholder=""  className={styles.input} onChange={(e)=>setUserInput(e.target.value)} value={userInput}/>
            </div>
            <div className={styles.container}>
            {arr.map((item,idx)=>(
                <button key={idx} className={styles.button}>{item}</button>
            ))}
            </div>
        </div>
    )
}