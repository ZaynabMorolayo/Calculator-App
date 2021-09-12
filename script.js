var resultField = $('#result');

function insertNumber (number) {
    var existingNumber = resultField.val()
    if (existingNumber == 0) {
        existingNumber = '';
        resultField.val(existingNumber + number)
    } else {
        resultField.val(existingNumber + number)
    }
        
    
};
function cNumber() {
    resultField.val(0)
}

function calculate(){
    var result = eval(resultField.val())
    resultField.val(result)
}
function deleteNumber (){
    var valou = resultField.val()
    
    if(valou!='') {
        resultField.val(resultField.val().slice(0,-1));
        if(valou.length - 1 == 0) {
            resultField.val(0);
        }
    }
    
}