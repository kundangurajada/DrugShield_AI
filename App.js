import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import drugsList from "./drugs";

function App(){

const [drugs,setDrugs] = useState(["",""])
const [results,setResults] = useState([])
const [suggestions,setSuggestions] = useState([])
const [activeIndex,setActiveIndex] = useState(null)

const handleChange = (index,value)=>{

 const updated = [...drugs]
 updated[index] = value
 setDrugs(updated)

 setActiveIndex(index)

 const filtered = drugsList.filter(d =>
  d.toLowerCase().includes(value.toLowerCase())
 )

 setSuggestions(filtered.slice(0,5))
}

const selectDrug = (index,name)=>{

 const updated = [...drugs]
 updated[index] = name
 setDrugs(updated)

 setSuggestions([])
}

const addMedicine = ()=>{
 setDrugs([...drugs,""])
}

const removeMedicine = (index)=>{

 if(drugs.length<=2){
  alert("At least 2 medicines required")
  return
 }

 const updated = drugs.filter((_,i)=>i!==index)
 setDrugs(updated)
}

const checkDrugs = async ()=>{

 const filtered = drugs.filter(d=>d.trim()!=="")

 if(filtered.length<2){
  alert("Enter at least 2 medicines")
  return
 }

 const res = await axios.post("http://localhost:5000/check",{
  drugs:filtered
 })

 setResults(res.data)
}

const getResultLabel = (severity)=>{
 if(severity==="High") return "DANGEROUS"
 if(severity==="Moderate") return "MODERATE"
 return "SAFE"
}

const getResultClass = (severity)=>{
 if(severity==="High") return "danger"
 if(severity==="Moderate") return "moderate"
 return "safe"
}

return(

<div className="container">

<h1>DrugShield AI</h1>
<p>Detect Dangerous Drug Interactions</p>

<div className="inputs">

{drugs.map((drug,index)=>(

<div key={index} className="input-row">

<div className="input-container">

<input
placeholder={`Enter medicine ${index+1}`}
value={drug}
onChange={(e)=>handleChange(index,e.target.value)}
/>

{activeIndex===index && suggestions.length>0 && (

<div className="suggestions">

{suggestions.map((s,i)=>(
<div
key={i}
className="suggestion-item"
onClick={()=>selectDrug(index,s)}
>
{s}
</div>
))}

</div>

)}

</div>

<button
className="delete-btn"
onClick={()=>removeMedicine(index)}
>
❌
</button>

</div>

))}

</div>

<button className="add-btn" onClick={addMedicine}>
+ Add Medicine
</button>

<br/><br/>

<button className="check-btn" onClick={checkDrugs}>
Check Interaction
</button>

<div className="results">

{results.map((r,i)=>(

<div key={i} className="card">

<h3>{r.drug1} + {r.drug2}</h3>

<p><b>Severity:</b> {r.severity}</p>
<p><b>Effect:</b> {r.effect}</p>
<p><b>Advice:</b> {r.advice}</p>

<div className={`result-box ${getResultClass(r.severity)}`}>
RESULT: {getResultLabel(r.severity)}
</div>

</div>

))}

</div>

</div>

)

}

export default App