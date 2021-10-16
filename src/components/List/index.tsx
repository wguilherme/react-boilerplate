function List(props: any) {

  return (
    <div id="component-list">
      <ul className="list-group">
        {props?.items ? props.items.map((item: any) => (
          < li className="list-group-item" > An item</li>
        ))
          : <p>Nenhum item encontrado</p>
        }
      </ul>

    </div >
  )

}

export default List