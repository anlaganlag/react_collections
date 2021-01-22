import React from 'react'

function Cell(i) {
    return (
        <span onClick={()=>console.log(i.val+"被点击了")}>
            格子
        </span>
    )
}

export default Cell
