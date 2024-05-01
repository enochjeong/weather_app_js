
// 추상화된 함수 
/**
 * 
 * @param {NodeList} elmts - selcected elements from HTML to add events
 * @param {string} event - event type e.g. 'click', 'mouseenter'...
 * @param {function} callback - callback function to be excuted when event is triggered
 */

export function eventOnElmts(elmts, event, callback) {
    for(const elmt of elmts){
        elmt.addEventListener(event, callback);
    }
}


