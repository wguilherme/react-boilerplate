import { IItems, IList } from "./interface"
import ListMessage from "components/Warning"
import { useEffect, useState } from "react"
import api from "services/api"

function List(props: IList) {
  const { loading, route } = props
  const [items, setItems] = useState([])

  useEffect(() => {
    async function fetchData() {
      const res: any = api.get(`/${route}`)
      setItems(res.data)
    }
    fetchData()
  }, [])


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