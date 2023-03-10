let btn = document.getElementById('btn');
// let qrcode = document.getElementById('qrcode');

btn.addEventListener('click',function(){
    let input = document.getElementById('input').value
console.log(input);
document.getElementById("qrcode").src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input}`;
document.getElementById('input').value=""
})