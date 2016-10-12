/**
 * Created by fallenSoulDev on 10.09.2016.
 */
var textNodesCounter = 0;
function viewNodes(Node) {
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
}

module.exports = viewNodes;