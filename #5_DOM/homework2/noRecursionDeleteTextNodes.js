/**
 * Created by fallenSoulDev on 10.09.2016.
 */
function noRecursionDeleteTextNodes(Node) {
    var elems = Node.childNodes;
    console.groupCollapsed('deleteTextNodes');
    console.log(elems);
    for (var i = 0; i < Node.childNodes.length; i++) {
        var childNode = Node.childNodes[i];
//            console.log(elems[i].nodeType);
        if (childNode.nodeType === 3) {
            Node.removeChild(Node.childNodes[i]);
            i--;
        }
        // if(childNode.nodeType !== 3){
        //     deleteTextNodes(childNode);
        // }
    }
    console.log(elems);
    console.groupEnd('deleteTextNodes');
}


module.exports = noRecursionDeleteTextNodes;