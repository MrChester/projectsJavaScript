/**
 * Created by fallenSoulDev on 10.09.2016.
 */
function recursionDeleteTextNodes(Node) {
    var nodeChilds = Node.childNodes;
    console.groupCollapsed('recursionDeleteTextNodes');
    console.log(nodeChilds);
    for (var i = 0; i < Node.childNodes.length; i++) {
        var childNode = Node.childNodes[i];
        if (childNode.nodeType === 3) {
            Node.removeChild(Node.childNodes[i]);
            i--;
        }
        if(childNode.nodeType !== 3){
            recursionDeleteTextNodes(childNode);
        }
    }
    console.log(nodeChilds);
    console.groupEnd('recursionDeleteTextNodes');
}

module.exports = recursionDeleteTextNodes;