
/* HEADER DOM DOCUMENT OBJECT MODEL basically, a structured representation of HTML documents.The DOM allows us to use JavaScript to access HTML elements
and styles in order to manipulate them.DOM is basically a connection point between HTML documents and JavaScript code.*/
/*console.log(document.querySelector('.message'));
console.log(document.querySelector('.message').textContent);// get ing text from html document
//SUB DOM manipulation
document.querySelector('.message').textContent ="Hi Prajwal";// passing the text to html document
document.querySelector('.number').textContent =18;// passing the number to html document
document.querySelector('.guess').value=-15;//with an input field, to get the actual value, we use the value property.*/

//HEADER Manipulating CSS Styles
//HEADER Handling Click Events by using EventListener
// we need a random number between one and 20.
var secr_num=Math.trunc((Math.random()*20))+1;// it never include 20 it includs 1 to 20
var scor=20;
var high_scor=0;

/*his addEventListener method,we first need to pass in the type of the event.And in this case, it's just a simple click.
we actually need to tell the event listener what to do. So basically, we need to specify the reaction to the Click event.
do that by defining a function.unction will contain exactly the code that should be executed whenever this click event happens
on this Check button.that function is going to be called the event handler.*/
document.querySelector('.check').addEventListener('click',function(){
/*   console.log(document.querySelector('.guess').value);
   document.querySelector('.message').textContent ="Hi Aquil Marre";*/
var guess=Number(document.querySelector('.guess').value);
//SUB when there is no input
if(!guess){
    document.querySelector('.message').textContent="No Number ! !";
}
//SUB when the player is win
else if(guess===secr_num){
    document.querySelector('.message').textContent="Correct Number ! !";
    document.querySelector('.number').textContent=secr_num;
    document.querySelector('body').style.backgroundColor="green";
    if(scor>high_scor) document.querySelector('.highscore').textContent=scor;

}
//SUB when number is high
else if(guess>secr_num){
    if(scor>1){
        document.querySelector('.message').textContent="Too High ! !";
        document.querySelector('.score').textContent=--scor;
        document.querySelector('body').style.backgroundColor="#01579b";
    }
    else{
        document.querySelector('.message').textContent="You lost the Game !";
        document.querySelector('.score').textContent=0;
        document.querySelector('body').style.backgroundColor="#f44336";
    }
}
//SUB when number is low
else if(guess<secr_num){
    if(scor>1){
        document.querySelector('.message').textContent="Too Low ! !";
        document.querySelector('.score').textContent=--scor;
        document.querySelector('body').style.backgroundColor="#01579b";
    }
    else{
        document.querySelector('.message').textContent="You lost the Game !";
        document.querySelector('.score').textContent=0;
        document.querySelector('body').style.backgroundColor="#f44336";
    }
}
});
//HEADER reset the game 
document.querySelector('.again').addEventListener('click', function(){
    document.querySelector('body').style.backgroundColor="#212121";
    scor=20;
    document.querySelector('.score').textContent=scor;
    document.querySelector('.number').textContent='?';
    document.querySelector('.message').textContent="Start guessing...";
    document.querySelector('.guess').value='';
    secr_num=Math.trunc((Math.random()*20))+1;
    
});

