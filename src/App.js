
import './App.css';
import { useEffect, useState } from 'react';
import { getDatabase ,push,ref,set, onChildAdded, update} from "firebase/database";
function App() {

  const [name,setname]=useState("");
  const [chats,setChats]=useState([]);

  const [msg,setMsg]=useState('');

  const db = getDatabase(); 
  const chatListRef = ref(db, 'chats');

    updateHeight=()=>{
      const el=document.getElementById('chat');
      if(el){
        el.scrollTop = el.scrollHeight;  
      }
          }

    useEffect(()=>{
      onChildAdded(chatListRef, (data) => {
        setChats(chats=>[...chats,data.val()])
        updateHeight();
           });
    },[])
  
  const sendChat =()=>{
   const chatRef = push(chatListRef);
      set(chatRef, {
        name,message:msg
        });

    setMsg('');
  }
  return (
    <div>
   {name ? null: <div>
      <input type="text" placeholder='User Name' onBlur={(e) =>  setname(e.target.value)}></input>
      </div>}
      {name ?<div>
      <h1>User : {name}</h1>
      <div id="chat" className="chat-container">
      { chats.map((c,i)=>(
      <div key={i} className={`container ${c.name === name ? 'me':''}`}>
       
          <p className='chatbox'>
            <strong>{c.name}:</strong>
            <span>{c.message}</span>
          </p>
          </div>
          ))}
      </div>
      <div className='btm'>
          <input type='text' onInput={(e)=>setMsg(e.target.value )}  value={msg} placeholder='enter message here'/>
          <button onClick={(e)=>sendChat()}>Send</button>
    </div> 
      </div>:null}
        
    </div>
    
  );
}

export default App;
