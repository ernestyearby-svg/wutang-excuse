const gate=document.querySelector('#age-gate');
const site=document.querySelector('#site');
let confirmed=false;
try{confirmed=sessionStorage.getItem('excuse-age-confirmed')==='yes'}catch{}
if(!confirmed){site.inert=true;gate.showModal()}
gate.addEventListener('cancel',event=>event.preventDefault());
document.querySelector('#enter').addEventListener('click',()=>{try{sessionStorage.setItem('excuse-age-confirmed','yes')}catch{}gate.classList.add('leaving');setTimeout(()=>{gate.close();site.inert=false;document.querySelector('header .wordmark').focus()},350)});
document.querySelector('#exit').addEventListener('click',()=>{window.location.replace('about:blank')});
const header=document.querySelector('#header');
const updateHeader=()=>header.classList.toggle('scrolled',scrollY>35);
window.addEventListener('scroll',updateHeader,{passive:true});updateHeader();
const menu=document.querySelector('#mobile-menu');
const toggle=document.querySelector('#menu-toggle');
toggle.addEventListener('click',()=>{menu.showModal();toggle.setAttribute('aria-expanded','true')});
const closeMenu=()=>{menu.close();toggle.setAttribute('aria-expanded','false');toggle.focus()};
document.querySelector('#menu-close').addEventListener('click',closeMenu);
menu.addEventListener('close',()=>toggle.setAttribute('aria-expanded','false'));
menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.querySelector('#signup-form').addEventListener('submit',event=>{event.preventDefault();event.currentTarget.hidden=true;document.querySelector('#success').hidden=false;document.querySelector('#email').value=''});
