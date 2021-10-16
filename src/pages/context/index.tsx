import { useContext } from "react";
import "./styles.css"
import { ItemContext } from 'context/Item/index';

function Context() {

  const { item, setItem, setUpdateItem } = useContext(ItemContext)



  console.log("debug useContext", item)

  return (
    <div id="context">
      <h1>Context Page</h1>
      <p>Map of items</p>
    </div>
  )
}

export default Context