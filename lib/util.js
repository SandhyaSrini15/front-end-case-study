/**
 * @function getChildDOMNode
 * @param {Event} event 
 * @param {Boolean} isHidden 
 * @returns {void}
 * @description finds the inner element of the clicked and shows/hides the element
 */

function getChildDOMNode(event, isHidden) {
    let nameOfElement = event.target.innerText.toString()
    let element = document.getElementsByClassName(nameOfElement)
     Array.from(element).length && Array.from(element[0].classList).includes('hidden') ? element[0]?.classList.remove('hidden') : element[0]?.classList.add('hidden')
}

 function findElement(e, expand)
{
    let nameOfElement = e.target.innerText.toString()
    let element = Array.from(document.getElementsByClassName(nameOfElement))
    element[0] !== undefined && element[0]?.classList.length > 0 && !expand ? element.map((el) => el.classList?.add('hidden')) :element.map((el) => el.classList?.remove('hidden'))

}

export { getChildDOMNode, findElement };
