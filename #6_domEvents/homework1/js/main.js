 var tree = document.getElementsByTagName('ul')[0];
var content = document.querySelectorAll('.accordion__inner');
console.log(content);
 /* catch clicks on whole tree */
 document.body.addEventListener('click', function (e){
    e.preventDefault();
     var target = event.target;
     console.log(target)
     var childrenContainer = target.parentNode.getElementsByTagName('ul')[0];
     var contains = childrenContainer.classList.contains('active');
     console.log(childrenContainer);

     if (!childrenContainer) {
     return;
     } // no children
     else{
        for(let i = 0; i < content.length; i++){
            content[i].classList.remove('active');
        }
        if(!contains){
            childrenContainer.classList.remove('active');
            childrenContainer.classList.add('active');
        }
        else{
            childrenContainer.classList.remove('active');
        }
     }
 });
