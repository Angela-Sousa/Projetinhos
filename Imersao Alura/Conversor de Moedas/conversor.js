function converterValor() {
  
    var campoConverterValor = document.getElementById('conversor')
    console.log(campoConverterValor)
  
    var converteValor= campoConverterValor.value
    
    //var valorEmDolarNumero = parseFloat(converteValor)
    var valorEmReal = converteValor * 5.50
    var valorEmRealFixado = valorEmReal.toFixed(2)
    
    //alert(valorEmRealFixado)
   
    document.getElementById("convertido").value = valorEmRealFixado
    
}