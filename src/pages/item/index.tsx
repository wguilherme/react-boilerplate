import List from "components/List"
import { ItemContext } from 'context/Item/index';
import { useContext } from "react";

function Item(props: any) {

  const { items, isLoading } = useContext(ItemContext)
  if (items) console.log("debug in item page", items)

  return (
    <div id="page-item-index" className="container mt-5">
      <List name="List of items" items={items} loading={isLoading} />
    </div >
  )

}

export default Item