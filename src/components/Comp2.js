import React, { useContext } from 'react'
import MsgContext from '../context/msgContext'

function Comp2() {
    const { data, setData } = useContext(MsgContext)
    return (
        <div>{data}</div>
    )
}

export default Comp2