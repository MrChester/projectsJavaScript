/**
 * Created by fallenSoulDev on 10.09.2016.
 */
var tagMap = new Map();
var classesMap = new Map();
var collectionTagIndex = 0, collectionClassesIndex = 0, textNodesCounter = 0;
function scanDom(Node) {

    for (var i = 0; i < Node.childNodes.length; i++) {

        var childNode = Node.childNodes[i];
        if (childNode.nodeType === 1) {
            tagMap.set(collectionTagIndex, childNode.tagName);
            classesMap.set(collectionClassesIndex, childNode.className);
        }
        if(childNode.nodeType !== 3){
            collectionTagIndex++;
            collectionClassesIndex++;
            scanDom(childNode);
        }
        else{
            textNodesCounter++;
        }
    }
    console.log(`Текстовых узлов: ${textNodesCounter}`);
}

console.log(tagMap);
console.log(classesMap);

module.exports = scanDom;/**
 * Created by fallenSoulDev on 11.10.2016.
 */
