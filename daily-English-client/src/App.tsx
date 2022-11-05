import Markdown from 'marked-react';
import {useEffect,useState} from 'react'
function App() {
  const [arr,setArr] = useState()
  useEffect(()=>{
    fetch('https://api.github.com/repos/zhengchengshi/daily_english/contents/')
    .then(res=>res.json())
    .then(res=>{
      setArr(res);
      console.log(res)
    })
  },[])
  return (
    <>
    
    </>
  )
}

export default App
