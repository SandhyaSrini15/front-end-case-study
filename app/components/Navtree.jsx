'use client'
import React, { useState } from "react";

function Navtree({ treeData, parent }) {
    const [expand, setExpand]= useState(true)
    function findElement(e)
    {
        setExpand(!expand)
        let nameOfElement = e.target.innerText.toString()
        let element = Array.from(document.getElementsByClassName(nameOfElement))
        element[0].classList !== undefined && element[0].classList.length > 0 && !expand ? element.map((el) => el.classList.add('hidden')) :element.map((el) => el.classList.remove('hidden'))

    }
  return (
    <div>
      {treeData.map((element) => {
        return (
          <div key={element.id} >
            <span className={`${parent} ${parent ? 'hidden' : 'block'} ${parent && 'pl-10'}`} onClick={findElement}>{element.label}</span>
            {element.children && element.children.length > 0 && (
                <span className='px-0'>
              <Navtree treeData={element.children} parent={element.label}/>
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Navtree;
