/**
 * Created by fallenSoulDev on 10.09.2016.
 */
var tagNameMap = new Map();
var classNameMap = new Map();
var textNodesMap = new Map();
var textNodeCounter = 0;

function scanDom(Node) {

    for (var i = 0; i < Node.childNodes.length; i++) {
        var childNode = Node.childNodes[i];
        var tag = childNode.tagName;
        var nodeName = childNode.nodeName;
        var className = childNode.className;
        if (childNode.nodeType === 1) {
            if (!tagNameMap.has(tag)) {
                tagNameMap.set(tag, 1);
            }
            else {
                let val = tagNameMap.get(tag);
                let count = parseInt(val) + 1;
                tagNameMap.set(tag, count);
            }
            if (className !== "") {
                if (!classNameMap.has(className)) {
                    classNameMap.set(className, 1);
                }
                else {
                    let val = classNameMap.get(className);
                    let count = parseInt(val) + 1;
                    classNameMap.set(className, count);
                }
            }
        }
        if (childNode.nodeType !== 3) {
            scanDom(childNode);
        }
        else {
            // if (!textNodesMap.has(nodeName)) {
            //     textNodesMap.set(nodeName, 1);
            // }
            // else {
            //     let val = textNodesMap.get(nodeName);
            //     let count = parseInt(val) + 1;
            //     textNodesMap.set(nodeName, count);
            // }
            textNodeCounter++;
        }
    }
    return [tagNameMap, classNameMap, textNodeCounter];
}

module.exports = scanDom;
/**
 * Created by fallenSoulDev on 11.10.2016.
 */
