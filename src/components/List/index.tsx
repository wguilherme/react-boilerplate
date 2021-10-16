import { IItems, IList } from "./interface"

function List(props: IList) {

  const { items } = props

  return (
    <div id="component-list">
      <ul className="list-group">
        {items ? items.map((item: IItems) => (
          <li className="list-group-item">
            {item.name}
            {item.description}
          </li>
        ))
          : <h4 style={{ fontWeight: 300 }} className="text-center">Nenhum item encontrado 😕 </h4>
        }
      </ul>

    </div >
  )
}

export default List