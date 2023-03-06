/**
 * @function getChildDOMNode
 * @param {Event} event 
 * @param {Boolean} isHidden 
 * @returns {void}
 * @description finds the inner element of the clicked and shows/hides the element
 */

function getChildDOMNode(event, isHidden) {
    console.log("isHidden", isHidden)
    let nameOfElement = event.target.innerText.toString()
    let element = document.getElementsByClassName(nameOfElement)
    element.length > 0 && isHidden ? element[0].classList.add('hidden') : element[0].classList.remove('hidden')
}

export default getChildDOMNode;
