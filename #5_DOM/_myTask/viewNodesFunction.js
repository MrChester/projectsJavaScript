/**
 * Created by fallenSoulDev on 10.09.2016.
 */
var textNodesCounter = 0;
function viewNodes(Node) {

    var nodeChilds = Node.childNodes;
    console.groupCollapsed('viewNodes');
    console.log(nodeChilds);
    for ( var i = 0; i < Node.childNodes.length; i++) {
        var childNode = Node.childNodes[i];
        var nodeType = childNode.nodeType;
        if (nodeType === 3) {
            textNodesCounter++;
        }
        if (nodeType !== 3) {
            viewNodes(childNode);
        }
    }
    console.log(textNodesCounter);
    console.groupEnd('viewNodes');
}

module.exports = viewNodes;