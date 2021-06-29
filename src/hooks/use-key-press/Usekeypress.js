import React, {useEffect} from 'react'

const Usekeypress = (fn) => {

useEffect( () => {
window.addEventListener("keydown", fn)
return () => window.removeEventListener("keydown", fn);
},[fn])

    return (
        <div>
            
        </div>
    )
}

export default Usekeypress
