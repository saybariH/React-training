import { useRef, useState } from "react"

export default function Form(){
    
    const inputNameRef   =  useRef()
    const inputAgeRef   =  useRef()
    const inputCountryRef   =  useRef()
    const inputAcceptRef   =  useRef()

    const handleSubmit = (e)=> {
        e.preventDefault()
        const values = {
            name: inputNameRef.current.value,
            age: inputAgeRef.current.value
        }
        console.log(values)

    }
    return <div className="container">
        <form>
        <div className="form-group">
         <label>Name</label>
         <input type="text" id='name'  className="form-control" ref={inputNameRef}/>
         </div>

         <div className="form-group">
         <label>Age</label>
         <input type="number" id='age' className="form-control"  ref={inputAgeRef}/>
         </div>

         <div className="form-group">
         <label htmlFor="country">Country</label>
         <select type="number" id='country' className="form-control"  ref={inputCountryRef}>
         <option value='MA'>Maroc</option>
         <option value='DZ'>Algérie</option>
         <option value='TN'>Tunisie</option>
         <option value='OTHER'>other</option>
         </select>
         </div>

         <div className="form-group">
         <input type="checkbox" id='accept'  className="form-check-input" ref={inputAcceptRef}/>
         <label htmlFor="accept" className="form-check-label">Accept our rules</label>
         </div>

         <div className="form-group">
         <button onClick={handleSubmit} className="btn btn-primary">
            save
         </button>
         </div>



        </form>
    </div>
}
    