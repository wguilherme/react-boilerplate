import List from "components/List"
function Item(props: any) {

  const items = ["Item 1", "item 2", "item 3", "Item 4", "Item 5"]

  return (
    <div id="page-item-index" className="container mt-5">

      <List name="List of items" items={items} />


    </div >
  )

}

export default Item