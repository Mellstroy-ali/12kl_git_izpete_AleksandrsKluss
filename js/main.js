
function scrollToContact(){
const el=document.getElementById('contact')
if(el){el.scrollIntoView({behavior:'smooth'})}
else{location.href='contact.html'}
}
function sendForm(e){
e.preventDefault()
document.getElementById('msg').innerText='Paldies! Mēs ar jums sazināsimies tuvākajā laikā.'
}
