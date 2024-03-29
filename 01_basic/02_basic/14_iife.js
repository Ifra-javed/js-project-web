// imediately invoked function expression(IIFE)
//global  scope k pullotion sy problem hoti kai bar too global scope k jo variables hain unk pullation sy bachny k liyae iife use rty hain

//function chaii(){
    //console.log(`DB Connected`);
//}
//chaii()

(function chaii(){
    //named IIFE
    console.log(`DB Connected`);
})();

( (name)=>{
    console.log(`DB Connected two ${name}`);
})("ifra")

