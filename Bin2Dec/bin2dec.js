function converterBinToDec(){
    var binario = document.getElementById("bin").value
    
    if(binario.length == 0){ 
        alert("Preencha o campo")      
        return false;
    }else{
        digits = binario.split("")
        if(digits.filter(digit =>  parseInt(digit) != 0 && parseInt(digit) != 1).length > 0){
            alert("Preencha o campo com apenas 0 ou 1")
            return false;
        }
    }
    
    digits.reverse()
    let decResult = 0
    digits.forEach((val, index) => decResult = decResult + (val * Math.pow(2, index)))
    
    document.getElementById("convertido").value = decResult
}
