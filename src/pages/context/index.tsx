import { useContext, useEffect } from "react";
import "./styles.css"
import { ItemContext } from 'context/Item/index';

function Context() {

  const { item, setItem, setUpdateItem, isLoading } = useContext(ItemContext)



  useEffect(() => {
    function loadContexts() {
      console.log("context page debug", item)
    }
    loadContexts()

  }, [item])



  console.log("debug useContext", item)

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