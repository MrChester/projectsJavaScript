function events() {

    let myLink = document.getElementById('myLink');
    let callBackFirst = function(e) {
    	console.log(e.target);
        alert(e.type);
    };
    let callBackSecond = function() { alert('Second click'); };

    document.addEventListener('click', callBackFirst);
    myLink.addEventListener('click', callBackSecond);

    // end module
}

// module export
module.exports = events;
