"use client";
import React, { useState } from "react";
import Link from "next/link";
import { findElement } from "@/lib/util";

function Navtree({ treeData, parent }) {
  const [expand, setExpand] = useState(true);

  function getElement(e) {
    setExpand(!expand);
    findElement(e, expand);
  }

  return (
    <div>
      {treeData.map((element) => {
        let link = element.children.length > 0 ? "#" : `/Link/${element.label}`;
        return (
          <div key={element.id}>
            <Link
              href={link}
              className={`${parent} ${parent ? "hidden" : "block"} ${
                parent && "pl-10"
              }`}
              onClick={getElement}
            >
              {element.label}
            </Link>
            {element.children && element.children.length > 0 && (
              <span className="px-0">
                <Navtree treeData={element.children} parent={element.label} />
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Navtree;
