import { useCallback } from "react"



function useLocalStorage(keyInLocal: string) {
    const setItem = useCallback( (key = keyInLocal, value: unknown) => {
        try {
            window.localStorage.setItem(key, JSON.stringify(value))
        } catch (error) {
            console.log(error)
        }
    }, [keyInLocal])

    const getItem = useCallback((key = keyInLocal) => {
        try {
           const item = window.localStorage.getItem(key)
           return item ? JSON.parse(item) : undefined
        } catch (error) {
            console.log(error)
        }
    }, [keyInLocal])

    const removeItem = useCallback((key = keyInLocal) => {
        try {
            window.localStorage.removeItem(key)
        } catch(error) {
            console.log(error)
        }
    }, [keyInLocal])


  return {setItem, getItem, removeItem}
}

export default useLocalStorage