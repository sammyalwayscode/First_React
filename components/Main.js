import React, { useState } from 'react'
import "./MainStyle.css"
import Discription from './Description/Description'

function Main(){
    const [show, setShow]=useState(false)

    const clickEffect = () => {setShow((prev) => !prev)}
    return(
        <div className="container">
            <div className="container_wrapper">
                <button
                onClick={clickEffect}
                className="container_button">
                    Meet Me
                </button>
            </div>
            <Discription show={show} setShow={setShow} />
        </div>
    )
}

export default Main