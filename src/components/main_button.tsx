

import React from 'react'

// if nothing type specified , keep it react node

interface myProps {
    children ?: React.ReactNode
    // name : string;
}



const MainButton : React.FC<myProps> = ({children}) => {
    return (
        <button>{children}</button>
    )
}


export default MainButton