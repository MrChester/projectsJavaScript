/**
 * Created by fallenSoulDev on 26.07.2016.
 */
function consoleRec(source, i) {
    console.log(source[i]);
    i += 1;
    if (source[i] !== undefined) {
        consoleRec(source, i);

    }
}
module.exports = consoleRec;

// test