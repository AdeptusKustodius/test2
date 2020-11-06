
let myBooks = document.body.querySelector('.myBooks');
let generateItem ="";
let start = '<div class="images">';
let end ='</div>';
let img =' <img src="images/' ;
let endImg ='.jpg "alt="">';
for(let i=1;i<21;i++){
    generateItem+=start +img +i +endImg   +end ;
    myBooks.innerHTML=generateItem;

}