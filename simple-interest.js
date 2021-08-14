// I = npr
// Formula for finding simple interest

function simpleInterest(time, principal, rate){
    let interest = (time * principal * rate) / 100;
    return interest;
}

const abBanktime = 2;
const abBankprincipal = 5000;
const abBankrate = 4;
const interest = simpleInterest(abBanktime, abBankprincipal, abBankrate);
console.log(interest);