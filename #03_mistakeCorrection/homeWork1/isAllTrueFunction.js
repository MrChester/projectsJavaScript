/**
 * Created by fallenSoulDev on 29.07.2016.
 */
function isAllTrue(source, filterFn){


    try{
        if(source.length === 0){
            throw new Error('Array is empty');
        }
        if(!(source instanceof Array)){
            throw new Error('It is not Array')
        }else{
            for( let i = 0; i < source.length; i++){
                if (filterFn(source[i]) !== true) {
                    return false;
                }
            }
            return true;
        }
    }catch (e){
        console.error(e.message);
    }

}

module.exports = isAllTrue;
