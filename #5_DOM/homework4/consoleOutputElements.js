let scanDom = require('../homework4/scanDom.js');

function consoleOutputElements() {

    let tags = scanDom(document.documentElement);
    let tag, classes, textNodes;

    for(let i = 0; i<tags.length; i++){
        switch (i){
            case 0:
                tag = tags[i];
                break;
            case 1:
                classes = tags[i];
                break;
            case 2:
                textNodes = tags[i];
                break;
        }
    }

    tag.forEach( (value, key) => {
        console.log(`Тегов ${key}: ${value}`);
    });
    classes.forEach( (value, key) => {
        console.log(`Классов ${key}: ${value}`);
    });
    textNodes.forEach( (value, key) => {
        console.log(`Текстовых узлов: ${value}`);
    });
}

module.exports = consoleOutputElements;