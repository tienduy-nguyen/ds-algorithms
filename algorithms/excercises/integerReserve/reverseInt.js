function reverseInt(num){
    let k = num >= 0? 1: -1
    return k*Math.abs(num).toString().split('').reverse().join('');
}

module.exports = reverseInt;