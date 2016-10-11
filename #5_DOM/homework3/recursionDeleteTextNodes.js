/**
 * Created by fallenSoulDev on 10.09.2016.
 */
function recursionDeleteTextNodes(Node) {

    for (var i = 0; i < Node.childNodes.length; i++) {

        var childNode = Node.childNodes[i];

        if (childNode.nodeType === 3) {
            Node.removeChild(Node.childNodes[i]);
            i--;
        }
        if (childNode.nodeType === 1) {
            recursionDeleteTextNodes(childNode);
        }
    }
}

module.exports = recursionDeleteTextNodes;