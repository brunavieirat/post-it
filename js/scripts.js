var lista = [];



function atualizarSecao(secao){


// criar variavel p guardar o html das notas

    var template="";

    
    //percorrer a lista de notas e criar o template das notas

   

    for (var i=0; i < lista.length; i++){
        

        if (lista[i].edit == false){

    template += '<form class="note" id="form" onclick="editarNota(this.parentElement, ' + i +')">' +
                '<h1 class="note__title" name="title">' + lista[i].titulo + ' </h1>' + 
                '<label class="note__body" name="text">' + lista[i].texto + '</label>' +
                '<button class="note__close" type="button" onclick="removerNota(this.form.parentElement, ' + i + ')">' +
                    '<i class="fa fa-times" aria-hidden="true"></i>'+
                    '</button>'+
                '</form>';
}
   
else {
    
   
    
    template += '<form class="note" id="form">' +
                '<input class="note__title" name="title" value="' + lista[i].titulo + '" </input>' +
                '<textarea class="note__body" name="text">' + lista[i].texto + '</textarea>' +
                '<button class="note__close" type="button" onclick="removerNota(this.form.parentElement, ' + i + ')">' +
                    '<i class="fa fa-times" aria-hidden="true"></i>'+
                    '</button>'+
                '</form>';
    }
}
    // colocar o html de tdo mundo (inner) dentro da secao

    secao.innerHTML= template;
}

function removerNota(secao,index){

    lista.splice(index,1);

    atualizarSecao(secao);

}

function editarNota(secao, index){

//atributo de edição

lista[index].edit=true;


//atualizar tela

atualizarSecao(secao);

}



function adicionarNota(inputTitulo, textareaTexto, form, secao){
    // criar uma variável nota 

   var nota = {
        titulo: inputTitulo.value,
        texto: textareaTexto.value,
        
    };

    //adicionar nota na lista

    lista.push(nota);

    //atualizar a secao de nota
atualizarSecao(secao);


console.log(lista);


//limpar formulario
   form.reset();


}