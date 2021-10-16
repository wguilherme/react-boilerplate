
import { createContext, useEffect, useState } from 'react'
import api from '../../services/api';
export const ItemContext = createContext<any>({})

export function ItemProvider(props: any) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  const [items, setItems] = useState<any>(false);
  const [updateItemContext, setUpdateItemContext] = useState<any>(false);
  const [isLoading, setIsLoading] = useState<any>(true)

  useEffect(() => {
    let flag = true
    async function fetchData() {
      try {
        const res = await api.get("/item")
        const items = res.data
        if (flag) setItems(items)
        if (flag) setUpdateItemContext(false)
        setIsLoading(false)
      } catch (error) {
        console.log("erro de API no getItems");
        setIsLoading(false)
        return error
      }
    } fetchData()
    return () => { flag = false }
  }, [updateItemContext])

  return (
    <ItemContext.Provider value={{ items, isLoading, setItems, setUpdateItemContext }}>
      {props.children}
    </ItemContext.Provider>
  )
}