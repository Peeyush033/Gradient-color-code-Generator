

let btn1=document.getElementById('mybutton');
let btn2=document.getElementById('mybutton2');
let Cpycode=document.querySelector('.copycode');
let rgb1="#301762";
let rgb2="#e25337";


// rendom value event 
const haxvalue=()=>{
     let myhexavalue='0123456789abcdef';
    let color='#';
    for(let i=0;i<6;i++){
     color=color+myhexavalue[Math.floor(Math.random()*16)];

    }
   return color;  
};


// button  color picker
const handlebutton1=()=>{
   rgb1=haxvalue();
    console.log(rgb1);
   document.body.style.backgroundImage=`linear-gradient(to right,${rgb1},${rgb2})`
    Cpycode.innerHTML=`background-image:linear-gradient(to right, ${rgb1},${rgb2});
`;
    btn1.innerText=`${rgb1}`;
    btn1.style.backgroundColor=rgb1;
};
const handlebutton2=()=>{
    rgb2=haxvalue();
    console.log(rgb2);  
     document.body.style.backgroundImage=`linear-gradient(to right,${rgb1},${rgb2})`
    Cpycode.innerHTML=`background-image:linear-gradient(to right, ${rgb1},${rgb2});
`;
      btn2.innerText=`${rgb2}`;
        btn2.style.backgroundColor=rgb2;};


//  code copy karr shkte hai iss api se  
Cpycode.addEventListener('click',()=>{
     let copyy= navigator.clipboard.writeText(Cpycode.innerText);
     console.log(copyy);
     alert('copyed');
});

// button shadow
let shadow=()=>{
    btn1.style.boxShadow = "rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;";
};
// button event
btn1.addEventListener('mousedown',shadow);
btn2.addEventListener('mousedown',shadow);
btn1.addEventListener('click',handlebutton1);
btn2.addEventListener('click',handlebutton2);