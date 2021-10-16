import { useContext, useEffect } from "react";
import "./styles.css"
import { ItemContext } from 'context/Item/index';

function Context() {

  const { item, setItem, setUpdateItem, isLoading } = useContext(ItemContext)

  if (isLoading) {
    return <p>Loading Items</p>
  }

  else return (
    <div id="context">
      <h1>Context Page</h1>
      <p>Map of items</p>
    </div>
  )
}

export default Context