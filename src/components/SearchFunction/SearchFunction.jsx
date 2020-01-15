import React, { useState,useContext } from 'react'
import { ThemeContext } from '../../ThemeContext';

function SearchFunction(props) {
  const [searchText, setText] = useState("");
  const context=useContext(ThemeContext)
  function handleChange(event) {
    setText(event.target.value);

  }
  function submit(e) {
    e.preventDefault();
    let inputText = searchText;
    let inputTextArray = inputText.split(" ");
    let keyWord = inputTextArray.join("-");
    console.log(keyWord);
    props.getSearchTextAction(keyWord)
    props.getProductListBySearch(keyWord, 1);
    setText("");
    context.setCurrentPage(1)
  }


  return (

    <div className="shop-widget">
      <h3 className="shop-title">Search by</h3>
      <form onSubmit={submit} className="shop-search" >
        <input name="text" id="input" type="text" placeholder="Your keyword...." value={searchText} onChange={handleChange} />
        <button type="submit"><i className="fa fa-search" /></button>
      </form>
    </div>


  )
}

export default SearchFunction