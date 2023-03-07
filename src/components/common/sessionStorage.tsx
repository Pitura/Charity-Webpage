import { useState, useEffect } from "react";

const useSessionStorage = () => {

   const [value, setValue] = useState('')
   
   useEffect(() => {
      setValue(sessionStorage.getItem('user') || '')
   }, [])
   
   return value
}

export default useSessionStorage;