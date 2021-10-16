
import { createContext, useEffect, useState } from 'react'
import api from '../../services/api';
export const ItemContext = createContext<any>({})

export function ItemProvider(props: any) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isLoading, setIsLoading] = useState<any>(true);
  const [items, setItems] = useState<any>(false);
  const [updateItemContext, setUpdateItemContext] = useState<any>(false);

  useEffect(() => {
    let flag = true
    async function fetchData() {
      try {
        setIsLoading(true)
        const res = await api.get("/item")
        const items = res.data

        console.log("items from context", items)

        if (flag) setItems(items)
        if (flag) setUpdateItemContext(false)

        setIsLoading(false)


      } catch (error) {
        setIsLoading(false)
        console.log("erro de API no getItems");
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