/**
 * Created by fallenSoulDev on 10.09.2016.
 */
var resultMap = new Map();
var collectionResultIndex = 0;

function scanDom(Node) {

    for (var i = 0; i < Node.childNodes.length; i++) {

        var childNode = Node.childNodes[i];
        if (childNode.nodeType === 1) {
            resultMap.set(collectionResultIndex, childNode.tagName);
            collectionResultIndex++;
            resultMap.set(collectionResultIndex, childNode.className);
        }
        if (childNode.nodeType !== 3) {
            collectionResultIndex++;
            scanDom(childNode);
        }
        else {
            collectionResultIndex++;
            resultMap.set(collectionResultIndex, childNode.nodeName);
            collectionResultIndex++;
        }
    }

}

function counterDomNodes(){
    let a = 3;
    return a;
}

counterDomNodes();

console.log(a);
console.log(resultMap);

module.exports = scanDom;
/**
 * Created by fallenSoulDev on 11.10.2016.
 */
