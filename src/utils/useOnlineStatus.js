import { useEffect, useState } from "react";

//frist decide : contract : what will be input and output
const useOnlineStatus = () => {
    const [onlineStatus , setOnlineStatus] = useState(null);
   
    useEffect(() => {
        fetchOnlineStatus()
    }, []) // need to run only once 

    const fetchOnlineStatus = () => {
        window.addEventListener("online", (event) => {
            setOnlineStatus(true)
          });
    
        window.addEventListener("offline", (event) => {
            setOnlineStatus(false)
          });
    }

    return onlineStatus;
}

export default useOnlineStatus