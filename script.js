const openBtn=document.getElementById("openBtn");
const lastBtn=document.getElementById("lastBtn");

const card=document.getElementById("card");
const letter=document.getElementById("letter");
const ending=document.getElementById("ending");

const typing=document.getElementById("typing");

const text=`I know life isn't always easy.

So I just wanted to remind you...

Please don't be too hard on yourself.

You're stronger than you think.

I hope today brings you peace,

lots of smiles,

and little moments that make you happy.

Keep shining,

and keep being the amazing person that you are. 💜`;

let i=0;

function typeWriter(){

if(i<text.length){

typing.innerHTML+=text.charAt(i);

i++;

setTimeout(typeWriter,35);

}

}

openBtn.onclick=()=>{

card.classList.add("hidden");

letter.classList.remove("hidden");

typeWriter();

}

lastBtn.onclick=()=>{

letter.classList.add("hidden");

ending.classList.remove("hidden");

setInterval(createHeart,200);

}

function createHeart(){

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="💜";

heart.style.left=Math.random()*100+"vw";

heart.style.animationDuration=(3+Math.random()*2)+"s";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},5000);

}
