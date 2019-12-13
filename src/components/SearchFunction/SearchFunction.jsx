import React,{useState} from 'react'

function SearchFunction(props)
{
  const [text,setText]=useState("");
  function handleChange(event)
  {
setText(event.target.value)

  }
  function submit(e)
  {
    e.preventDefault();
    const [textInput]=e.target.elements
    console.log(textInput.value)
  }
  

return (
    
          <div className="shop-widget">
            <h3 className="shop-title">Search by</h3>
            <form action="#" className="shop-search" >
              <input name="text" id="input" type="text" placeholder="Your keyword...."  onChange={handleChange} />
              <button onSubmit={submit}><i className="fa fa-search" /></button>
            </form>
          </div>
         
     
)
}

export default SearchFunction