




window.onload=function(){


    (()=>{
     let mostrarProdutosCliente = document.querySelector("#content-produtos > ul#produtos");
 
     for(let iten in Produtos){
         mostrarProdutosCliente.innerHTML += `<li class="itemPr" data-preco=${Produtos[iten].preco}>${Produtos[iten].descricao}`        
     }
    })(Produtos) 
 
 
 
 const itemPr= document.querySelectorAll("#produtos > li.itemPr");  
 const cestaCliente =document.querySelector("ul#cestaDoCliente");
 const ValorTotalCompra = document.querySelector("#mostraTotalCompra");
 const guardaIten=[];
 var totalPedido =0;
 itemPr.forEach((item)=>{
     item.addEventListener("click",()=>{
 
         li = document.createElement("li");
         li.setAttribute("data-preco", item.dataset.preco);
         if(guardaIten.indexOf(item.textContent) == -1){
            guardaIten.push(item.textContent);
             cestaDoCliente.appendChild(li).textContent = item.textContent ;
             totalPedido += Number(item.dataset.preco);
             ValorTotalCompra.value = totalPedido.toLocaleString("pt-BR",
             {style:"currency", currency: "BRL"})
         }else{
             alert(`O item ${item.textContent} já esta dentro de sua cesta de compras !!`);
         }
     });
 });
 
 
// criei uma forma para excluir com dois clicks... 
 const cesta = document.querySelectorAll("#cestaDoCliente");
     cesta.forEach((item) => {
         item.addEventListener('dblclick', (itemCesta) => {
             var excluir = guardaIten.indexOf(itemCesta.target.textContent);
             if (excluir > -1) {
                 totalPedido -= Number(itemCesta.target.dataset.preco);
                 cestaCliente.removeChild(cestaDoCliente.childNodes[excluir]);
                 guardaIten.splice(excluir, 1);
                 ValorTotalCompra.value = totalPedido.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
             }
         });
     });
 
 
 }










