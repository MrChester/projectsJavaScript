/**
 * Created by fallenSoulDev on 10.09.2016.
 */
var resultMap = new Map();
var collectionResultIndex = 0;
var collectionAmountOfTags = 0;
var collectionAmountOfClasses = 0;
var textNodesCounter = 0;

function scanDom(Node) {

    for (var i = 0; i < Node.childNodes.length; i++) {

        var childNode = Node.childNodes[i];
        if (childNode.nodeType === 1) {
            // resultMap.set(collectionResultIndex, childNode.tagName);
            // collectionResultIndex++;
            // resultMap.set(collectionResultIndex, childNode.className);
            resultMap.set(childNode.tagName, collectionAmountOfTags);
            resultMap.set(childNode.className, collectionAmountOfClasses);

        }

        // перебор 
        for (let tag of resultMap.keys()) {
            console.group('qwerty');
            console.log(tag);
            console.groupEnd('qwerty');

        }
        if (childNode.nodeType !== 3) {
            // collectionResultIndex++;
            scanDom(childNode);
        } else {
            // collectionResultIndex++;
            // resultMap.set(collectionResultIndex, childNode.nodeName);
            // collectionResultIndex++;
            textNodesCounter++;
        }
    }
    return resultMap;


}



module.exports = scanDom;
/**
 * Created by fallenSoulDev on 11.10.2016.
 */
