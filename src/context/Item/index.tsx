
import { createContext, useEffect, useState } from 'react'
import api from '../../services/api';
export const ItemContext = createContext<any>({})

export function ItemProvider(props: any) {
  console.log("pass item provider")

  // const [isLoading, setIsLoading] = React.useState<any>(true);
  const [item, setItem] = useState<any>(false);
  const [updateItemContext, setUpdateItemContext] = useState<any>(false);

  useEffect(() => {
    let flag = true
    async function fetchData() {
      try {
        const itemData = await api.get("/item")
        console.log("items from context", itemData)
        if (flag) setItem(itemData)
        if (flag) setUpdateItemContext(false)
      } catch (error) {
        console.log("erro de API no getItems");
      }
    } fetchData()
    return () => { flag = false }
  }, [updateItemContext])

  return (
    <ItemContext.Provider value={{ setItem, setUpdateItemContext }}>
      {props.children}
    </ItemContext.Provider>
  )
}