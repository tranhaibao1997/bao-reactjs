import React,{useState} from 'react'

function SearchFunction(props)
{
  const [searchText,setText]=useState("");
  function handleChange(event)
  {
  setText(event.target.value);

}
  function submit(e)
  {
    e.preventDefault();
    let inputText = searchText;
  let inputTextArray = inputText.split(" ");
  let keyWord = inputTextArray.join("-");
  console.log(keyWord);
    props.getProductListBySearch(keyWord);
  }
  

return (
    
          <div className="shop-widget">
            <h3 className="shop-title">Search by</h3>
            <form onSubmit={submit} className="shop-search" >
              <input name="text" id="input" type="text" placeholder="Your keyword...."  onChange={handleChange} />
              <button type="submit"><i className="fa fa-search" /></button>
            </form>
          </div>
         
     
)
}

export default SearchFunction