/**
 * Created by fallenSoulDev on 10.09.2016.
 */
var tagNameMap = new Map();
var classNameMap = new Map();
var textNodesMap = new Map();
// var collectionAmountOfTags = 0;
var collectionAmountOfClasses = 0;
var textNodesCounter = 0;

function scanDom(Node) {

    for (var i = 0; i < Node.childNodes.length; i++) {

        var childNode = Node.childNodes[i];
        var tag = childNode.tagName;
        var className = childNode.className;
        if (childNode.nodeType === 1) {
            if (tagNameMap.get(tag) === undefined && classNameMap.get(className) === undefined) {
                tagNameMap.set(tag, 1);
                // classNameMap.set(className, 1);
            } else {
                tagNameMap.forEach(function (value, key) {
                    if (key === tag) {
                        let collectionAmountOfTags = value + 1;
                        tagNameMap.set(tag, collectionAmountOfTags);

                    }
                })
                // classNameMap.forEach(function (value, key) {
                //     if (key === className) {
                //         collectionAmountOfClasses = value + 1;
                //         classNameMap.set(className, collectionAmountOfClasses);
                //     }
                // })
            }

        }
        if (childNode.nodeType !== 3) {
            scanDom(childNode);
        } else {
            textNodesCounter++;
        }
    }
}
console.log(tagNameMap);
// console.log(classNameMap);

module.exports = scanDom;
/**
 * Created by fallenSoulDev on 11.10.2016.
 */
