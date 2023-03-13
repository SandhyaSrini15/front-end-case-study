import Link from "next/link";
import React, { useState, useEffect } from "react";

function Dropdown({ dropdownList, parentName, onClickFn }) {
  return (
    dropdownList.length > 0 && (
      <div className={`px-10 border-blue-700 border-1px hidden ${parentName}`}>
        <ul>
          {dropdownList.map((el) => {
            return (
              <div key={el.id}>
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
