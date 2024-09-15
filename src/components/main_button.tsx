

import React from 'react'

// if nothing type specified , keep it react node

interface myProps {
    forClick?: () => void; 
    children ?: React.ReactNode;
    
}



const MainButton : React.FC<myProps> = ({children, forClick}) => {
    return (
        <button onClick={forClick}>{children}</button>
    )
}


export default MainButton