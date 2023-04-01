import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import './App.css'

function App() {

  const [data, setData] = useState([])

  useEffect(() => {
     axios.get(("https://planet-scale-database-connect.vercel.app/pesquisar")).then((response) => {
      setData(response.data)
      console.log(data)
    })
    .catch((err) => {
      console.log(err)
    })
  },[])

 return(
    <div>
      <h1>Teste</h1>
      {data.map(x => {
        return(
          <h1>{x.nome}</h1>
        )
      })}
    </div>
  )
}

export default App
