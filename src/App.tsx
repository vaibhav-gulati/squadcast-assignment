import MentionUser from './components/MentionUser'
import './App.css';
import mentionsData from './assets/data.json';
import { useState } from 'react';


interface userProp{
  mentions: string;
}


function App() {

  const [users,setUsers]=useState('');

  const handleUSers=(user)=>{
    console.log("user name",user)
  }

  return (
    <>
     <MentionUser mentions = {mentionsData} onChange={handleUSers}/>
    </>
  )
}

export default App
