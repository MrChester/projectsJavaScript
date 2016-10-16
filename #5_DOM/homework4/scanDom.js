/**
 * Created by fallenSoulDev on 10.09.2016.
 */
var resultMap = new Map();
var collectionResultIndex = 0;
var collectionAmountOfTags = 1;
var collectionAmountOfClasses = 0;
var textNodesCounter = 0;

function scanDom(Node) {

    for (var i = 0; i < Node.childNodes.length; i++) {

        var childNode = Node.childNodes[i];
        var tag = childNode.tagName;
        if (childNode.nodeType === 1) {
            resultMap.set(tag, collectionAmountOfTags);
        }

        if (resultMap.get(tag) === null) {
                resultMap.set(tag, 1);
            } else {
                collectionAmountOfTags = resultMap.get(tag) + 1;
                resultMap.set(tag, collectionAmountOfTags);
            }


        if (childNode.nodeType !== 3) {
            scanDom(childNode);
        } else {
            textNodesCounter++;
        }
    }
    return resultMap;


}



module.exports = scanDom;
/**
 * Created by fallenSoulDev on 11.10.2016.
 */
