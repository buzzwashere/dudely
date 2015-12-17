
/**
 * Put utility code in here.
 *
 */

 
// Function that uses a closure to cache the returned value of a function.
function cacheIt(formula){
    var evaluated = false,
        value;
    return function(){
        if (evaluated === false && typeof formula === 'function'){
            value = formula();
            evaluated = true;
        }
        return value;
    }
}

// Usage:
var getBody = function() {
    return $('body');
};
var body = cacheIt( getBody );
console.info('dudely you cached document body!');
