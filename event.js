const input = document.querySelector('input');
const h1 = document.querySelector('h1');

// input.addEventListener('change', function(){
//     console.log("TYPED LATER");
// })

// input.addEventListener('input', function(){
//     console.log("TYPING INSTANTLY");
// })



input.addEventListener('input', function(){
    h1.innerText = input.value;
})