/**
 * Created by fallenSoulDev on 10.09.2016.
 */
function noRecursionDeleteTextNodes(Node) {
    var nodeChilds = Node.childNodes;
    console.groupCollapsed('noRecursionDeleteTextNodes');
    console.log(nodeChilds);
    for (var i = 0; i < Node.childNodes.length; i++) {
        var childNode = Node.childNodes[i];
        if (childNode.nodeType === 3) {
            Node.removeChild(Node.childNodes[i]);
            i--;
        }
    }
    console.log(nodeChilds);
    console.groupEnd('noRecursionDeleteTextNodes');
}


module.exports = noRecursionDeleteTextNodes;