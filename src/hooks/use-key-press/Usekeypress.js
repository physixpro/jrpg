import React, {useEffect} from 'react'

const Usekeypress = (press) => {

useEffect( () => {
window.addEventListener("keydown", press)
return () => window.removeEventListener("keydown", press);
},[press])

    return (
        <div>
            
        </div>
    )
}

export default Usekeypress
