var lista = [];



function atualizarSecao(secao) {


    // criar variavel p guardar o html das notas

    var template = "";


    //percorrer a lista de notas e criar o template das notas



    for (var i = 0; i < lista.length; i++) {


        if (lista[i].edit == true) {

            //    var teste = lista[i].edit = false;

            template += '<form class="note" id="form">' +
                '<input class="note__title" name="title" value="' + lista[i].titulo + '" </input>' +
                '<textarea class="note__body" name="text">' + lista[i].texto + '</textarea>' +
                '<button class="note__close" type="button" onclick="removerNota(this.form.parentElement, ' + i + ')">' +
                '<i class="fa fa-times" aria-hidden="true"></i>' +
                '</button>' +
                '<button class="note__control" type="button" onclick="adicionarNota(this.form.title, this.form.text, this.form, this.form.parentElement,' + i + ')">' +
                'Concluído' +
                '</button>' +
                '</form>';

// adicionarNota(this.form.title, this.form.text, this.form, this.form.nextElementSibling, null)
        }

        else {

            template += '<form class="note" id="form" onclick="editarNota(this.parentElement, ' + i + ')">' +
                '<h1 class="note__title" name="title">' + lista[i].titulo + ' </h1>' +
                '<label class="note__body" name="text">' + lista[i].texto + '</label>' +
                '<button class="note__close" type="button" onclick="removerNota(this.form.parentElement, ' + i + ')">' +
                '<i class="fa fa-times" aria-hidden="true"></i>' +
                '</button>' +
                '</form>';



        }

    }
    // colocar o html de tdo mundo (inner) dentro da secao

    secao.innerHTML = template;

}

function removerNota(secao, index) {

    lista.splice(index, 1);

    atualizarSecao(secao);

}

function editarNota(secao, index) {

    //atributo de edição   

    lista[index].edit = true;
    
    //atualizar tela

    atualizarSecao(secao);

}



function adicionarNota(inputTitulo, textareaTexto, form, secao, index) {



    if (lista[index]) {
        //pegar nota

        // atualizar
        lista[index].titulo = inputTitulo.value;
        lista[index].texto = textareaTexto.value;

        lista[index].edit = false;

          atualizarSecao(secao);
    }
    else {

        
        var nota = {
            titulo: inputTitulo.value,
            texto: textareaTexto.value,

        };

         lista.push(nota);
        //trocar valores do titulo e texto 

        // lista[index].titulo = inputTitulo.value;
        // lista[index].texto = textareaTexto.value;

        // lista[index].edit = false;


        //chamar o atualiza secao
        atualizarSecao(secao);
        form.reset();

    }
}