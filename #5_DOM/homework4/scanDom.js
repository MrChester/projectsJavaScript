/**
 * Created by fallenSoulDev on 10.09.2016.
 */
var tagMap = new Map();
var classesMap = new Map();
var spacesMap = new Map();
var resultMap = new Map();
var collectionTagIndex = 0;
var collectionClassesIndex = 0;
var collectionSpacesIndex = 0;
var collectionResultIndex = 0;
var textNodesCounter = 0;

function scanDom(Node) {

    for (var i = 0; i < Node.childNodes.length; i++) {

        var childNode = Node.childNodes[i];
        if (childNode.nodeType === 1) {
            tagMap.set(collectionTagIndex, childNode.tagName);
            classesMap.set(collectionClassesIndex, childNode.className);
            resultMap.set(collectionResultIndex, childNode.tagName);
            collectionResultIndex++;
            resultMap.set(collectionResultIndex, childNode.className);
        }
        if (childNode.nodeType !== 3) {
            collectionTagIndex++;
            collectionClassesIndex++;
            collectionResultIndex++;
            scanDom(childNode);
        }
        else {
            collectionResultIndex++;
            resultMap.set(collectionResultIndex, childNode.nodeName);
            spacesMap.set(collectionSpacesIndex, childNode.nodeName);
            collectionSpacesIndex++;
            collectionResultIndex++;
            textNodesCounter++;
        }
    }
    return textNodesCounter;

}

console.log(tagMap);
console.log(classesMap);
console.log(spacesMap);
console.log(resultMap);


module.exports = scanDom;
/**
 * Created by fallenSoulDev on 11.10.2016.
 */
