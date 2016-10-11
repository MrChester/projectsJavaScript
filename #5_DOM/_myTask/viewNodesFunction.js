/**
 * Created by fallenSoulDev on 10.09.2016.
 */
var textNodesCounter = 0;
function viewNodes(Node) {

    console.groupCollapsed('viewNodes');

    for (var i = 0; i < Node.childNodes.length; i++) {
        var childNode = Node.childNodes[i];
        var nodeType = childNode.nodeType;
        if (nodeType === 3) {
            textNodesCounter++;
        }
        if (nodeType !== 3) {
            viewNodes(childNode);
        }
    }
    console.log(`Текстовых узлов: ${textNodesCounter}`);
    console.groupEnd('viewNodes');
}
console.log(`Текстовых узлов: ${textNodesCounter}`);

module.exports = viewNodes;