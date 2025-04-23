

let number = 8;

function checkNumber (num) {
    
    if (num>0 ) {
    return "positivo"
    };
    if (num<0 ) {
    return "negativo"
    };
    if (num==0 ) {
    return "Zero"
    };

};

console.log(checkNumber(number));

// A = false e B = True

// A || B = true
// !A && B = true

// A = true , B = False , C = true

// ! (A && B) || (B || C)

// true || true = true