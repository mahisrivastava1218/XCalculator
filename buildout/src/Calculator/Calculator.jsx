import { useState } from "react";
import styles from "./Calculator.module.css";
export default function Calculator(){
    const arr = ["7","8","9","+","4","5","6","-","1","2","3","*","C","0","=","/"];
    const [userInput,setUserInput] = useState("");  
    const[total,setTotal] = useState("");
    // if user enteer value then it add to old value if user click in = then user should see result else if user enter C then clear
    const handleClick=(e)=>{
        const id = e.target.id;
        if(id==='C'){
            setUserInput("");
            setTotal("");
        }else if(id === "="){
            if(userInput){
             handleSubmit();
            }else{
                setTotal("Error");
            }
            // return result;
        }else{
        setUserInput((val)=>val+id);
        }
    }
    // user can only input numbers otherwise alert will show
    // In simple JavaScript calculators, eval() is often used to evaluate a string as a JavaScript expression

    const handleSubmit=(e)=>{
        e?.preventDefault();
        console.log(e?.preventDefault);
        try{
            const ans= eval(userInput);
            const total = setTotal(ans);
        }catch(err){
            alert("Invalid inputs");
        }
    }
    console.log(userInput);
    return(
        <div style={{height:"80vh",width:"100vh",display:"flex",alignItems:"center",flexDirection:"column",border:"1px solid blue"}}>
            <h1>React Calculator</h1>
            <form onSubmit={handleSubmit} style={{width:"100%",display:"flex",alignContent:"center",justifyContent:"center"}}>
                <input type="text" placeholder=""  className={styles.input} onChange={(e)=>setUserInput(e.target.value)} value={userInput}/>
            </form>
            <div style={{margin:"10px",color:"gray"}}>{total}</div>
            <div className={styles.container} onClick={handleClick}>
            {arr.map((item,idx)=>(
                <button key={idx} id={item} className={styles.button}>{item}</button>
            ))}
            </div>
        </div>
    )
}