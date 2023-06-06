const name =document.getElementbyID('name');
const email =document.getElementbyID('email');
const subject =document.getElementbyID('subject');
const body =document.getElementbyID('body');
const submit =document.getElementbyID('sumbit');

const submit =document.getElementbyClassName('email-form');

submit.addEventListener('submit',(e)=>{
	e.preventDefault();
	console.log("Clicked");
	
	Email.send({
    SecureToken : "345a5304-57d5-4ffe-9351-0a541d3f3101",
    To : 'srijabiswas2001@gmail.com',
    From : "srijabiswas2001@gmail.com",
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message => alert(message)
);
		