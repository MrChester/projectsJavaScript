 var tree = document.getElementsByTagName('ul')[0];
var content = document.querySelectorAll('.accordion__inner');
console.log(content);
 /* catch clicks on whole tree */
 document.body.addEventListener('click', function (e){
    e.preventDefault();
     var target = event.target;
     var list = document.querySelectorAll('.accordion__item');

     if (target.tagName != 'A') {
         return;
     }

     var childrenContainer = target.parentNode.getElementsByTagName('ul')[0];

     if (!childrenContainer) return; // no children
     for(let i =0; i< content.length; i++){
        let contains = content[i].classList.contains('active');
        console.log(contains);
        
     }

     childrenContainer.classList.toggle('active');

     // childrenContainer.hidden = !childrenContainer.hidden;
     console.log(childrenContainer);
 });
