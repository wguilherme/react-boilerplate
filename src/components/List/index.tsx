import { IItems, IList } from "./interface"
import ListMessage from "components/Warning"

function List(props: IList) {

  const { items, loading } = props

  if (loading) return <ListMessage message="Carregando items ⏳" />
  else if (!loading && items.length === 0) return <ListMessage message="Nenhum item encontrado 😕" />
  else return (
    <div id="component-list">
      <ul className="list-group">
        {items?.map((item: IItems) => (
          <li key={item._id} className="list-group-item">
            {item.name}
            {item.description}
          </li>
        ))
        }
      </ul>
    </div >
  )
}

export default List