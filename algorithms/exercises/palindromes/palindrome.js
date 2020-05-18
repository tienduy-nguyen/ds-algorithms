function palidrome(str){
    let reversed = str.split('').reverse().join('');
    if(reversed === str) return true;
    return false;
}
function palidrome1(str){
    let len = str.length;
    for(let i=0; i<len;++i){
        if(str[i] !==str[len-i-1]) return false;
    }
    return true;
}

function palidrome2(str){
    return str.split('').every((char,i)=>{
        return char === str[str.length -i -1];
    });
}
module.exports = palidrome;