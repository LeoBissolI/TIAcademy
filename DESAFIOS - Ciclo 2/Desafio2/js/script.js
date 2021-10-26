//https://viacep.com.br/ws/${cep}/json/

window.onload = function() {
    
function resultadoCep(dadosCep){

for( let campo in dadosCep ){
    if(document.querySelector(`#${campo}`))
    document.querySelector(`#${campo}`).value = dadosCep[campo];
}

}




let dadosCep = async function(cep){

    let url = `https://viacep.com.br/ws/${cep}/json/`;
   try{
    let dadosFetch = await fetch(url);
    let dadosJson = await dadosFetch.json();
    resultadoCep(dadosJson);
   } catch(error){

   }


    // console.log(dadosJson);

}

// dadosCep('87040130')
const btnBuscar = document.querySelector("#botao");
const CxCEP = document.querySelector("#CEP");

btnBuscar.addEventListener('click',function(){

    dadosCep(CxCEP.value);

})




}