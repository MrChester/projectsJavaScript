/**
 * Created by fallenSoulDev on 29.07.2016.
 */
function isSomeTrue(source, filterFn) {

    try{
        if (source.length === 0) {
            throw new Error('Array is empty');
        }
        if (!(source instanceof Array)) {
            throw new Error('It is not Array');
        }
        else {
            for (var i = 0; i < source.length; i++) {
                if (filterFn(source[i]) === true) {
                    return true;
                }
            }
            return false;
        }
    }catch (e){
        console.error(e.message);
    }

}



module.exports = isSomeTrue;
// module.exports = isNumber;


