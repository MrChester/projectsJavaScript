/**
 * Created by fallenSoulDev on 10.09.2016.
 */
var tagNameMap = new Map();
var classNameMap = new Map();
var textNodesMap = new Map();

function scanDom(Node) {

    for (var i = 0; i < Node.childNodes.length; i++) {
        var collectionAmountOfTags = 0;
        var childNode = Node.childNodes[i];
        var tag = childNode.tagName;
        var className = childNode.className;
        if (childNode.nodeType === 1) {
            if (!tagNameMap.has(tag)) {
                collectionAmountOfTags = 1;
                tagNameMap.set(tag, collectionAmountOfTags);
            }
            else {
                let val = tagNameMap.get(collectionAmountOfTags);
                let count = parseInt(val) + 1;
                tagNameMap.set(tag, count);
            }
        }
        if (childNode.nodeType !== 3) {
            scanDom(childNode);
        }
    }
}
console.log(tagNameMap);
// console.log(classNameMap);

module.exports = scanDom;
/**
 * Created by fallenSoulDev on 11.10.2016.
 */
