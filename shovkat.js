// var a =prompt('ismingizni kiriting')
// if(a === 'Shovkat') alert(`Welcom ${a}`)
// else alert(`Hello ${a}`)

// var b = +prompt('Yoshingizni kiriting')
// if(b<18) alert('Yoshsan patsan oqshin kere') 
// else if(b < 50) alert('Ishlashingiz kerak')
// else if(b < 59) alert('Yaqinda pensiyaga chiqasiz')
// else if(b < 100) alert('san olasan')
// else  alert('ana oldi')



var a =prompt('ismingizni kiriting')
if(a ==='Shovkat'){
    alert ('Hello boss')
}else{
    alert('Hello guest')
}

var b = +prompt('Yoshingizni kiriting')
if (b<18) {
    alert("Yoshsan patsan o'qishin kere" )
}else if(b>=18 && b <=50){
    alert("Ishlashingiz kerak")
}else if(b>50 && b <=59){
    alert("yaqinda pensiyaga chiqasiz")
}else if(b>59 && b<70){
    alert("san  endi pensianersan. mazza qilib yasha boboy")
} else{
    alert("endi o'lasan")
}


var j = +prompt('Birinchi sonni kiriting')
var k = +prompt("Ikkinchi sonni kiriting")
var l = +prompt("Uchichi sonni kiriting")
var max, min, nin;

if (j>k&&j>l){
    max = j
    console.log(max);
}else if(k>l&&k>j){
    max = k
    console.log(max);
}else if (l>j&&l>k){
    max = l
    console.log(max);
}
 
if(j<k&&j<l){
    min = j
    console.log(min);
}else if(k<j&&k<l){
    min = k
    console.log(min);
}else if(l<j&&l<k){
    min = l
    console.log(min);
}

nin =((max+min) / 2);
alert(nin)





