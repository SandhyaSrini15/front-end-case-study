import Link from "next/link";
import React, { useRef, useState } from "react";

function Dropdown({ dropdownList, parentName, onClickFn }) {
  const [list, setList] = useState(dropdownList)
  const dragItem = useRef();
  const dragOverItem = useRef();

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
    dropdownList.length > 0 && (
      <div className={`px-10 border-blue-700 border-1px hidden ${parentName}`}>
        <ul>
          {list.map((el, index) => {
            return (
              <div key={el.id} onDragStart={(e) => dragStart(e, index)} onDragEnter={(e) => dragEnter(e, index)} onDragEnd={drop} draggable>
                <Link
                  href={el.children.length > 0 ? "#" : `/Link/${el.label}`}
                  onClick={onClickFn}
                >
                  {el.label}
                </Link>
                {el.children && el.children.length > 0 && (
                  <Dropdown
                    dropdownList={el.children}
                    parentName={el.label}
                    onClickFn={onClickFn}
                  />
                )}
              </div>
            );
          })}
        </ul>
      </div>
    )
  );
}

export default Dropdown;
