"use client";

import React, { useState } from "react";
import Link from "next/link";
import Dropdown from "./Dropdown";
import { getChildDOMNode } from "@/lib/util";

function Navbar({ data }) {
  const [state, setState] = useState(data);
  const [expand, setExpand] = useState(false);
  const [count, setCount] = useState(0);

  function handleClick(e) {
    setExpand(!expand);
    getChildDOMNode(e, expand);
    
  }

  function increaseCount() {
    setCount(count + 1);
  }

  return (
    <div>
      <div>
        <nav className="px-2 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {state.map((element) => {
              return (
                <div key={element.id}>
                  <li>
                  <Link
                    href={element.children.length > 0 ? '#' : `/Link/${element.label}`}
                    className="block py-2 pl-3 pr-4 rounded md:bg-transparent text-blue-700"
                    onClick={handleClick}
                  >
                    {element.label}{" "}
                  </Link>
                  </li>
                  {element.children.length > 0 && (
                    <Dropdown
                      dropdownList={element.children}
                      parentName={element.label}
                      onClickFn={handleClick}
                      setCount={increaseCount}
                    />
                  )}
                </div>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
