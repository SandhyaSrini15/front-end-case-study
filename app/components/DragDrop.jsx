'use client'
import React, {useState, useRef} from 'react'

function DragDrop() {

    const dragItem = useRef();
    const dragOverItem = useRef();
    const [list, setList] = useState(['1', '2', '3', '4', '5'])

    function dragStart(e, position) {
        dragItem.current = position
        console.log(e.target.innerHTML)
    }

    function dragEnter(e, position) {
        dragOverItem.current = position
        console.log(e.target.innerHTML)
    }

    function drop (e) {
        const copyItems = [...list]
        const dragItemContent = copyItems[dragItem.current]
        copyItems.splice(dragItem.current, 1)
        copyItems.splice(dragOverItem.current, 0 , dragItemContent)
        dragItem.current = null
        dragOverItem.current = null
        setList(copyItems)
    }
  return (
    <div>{
        list.map((item, index) => {
            return (
                <div key={index} onDragStart={(e) => dragStart(e, index)} onDragEnter={(e) => dragEnter(e, index)} onDragEnd={drop} draggable>
                    {item}
                </div>
            )
        })
        }</div>
  )
}

export default DragDrop