var lista = [];

var listaNotas = {
    
        lista: [],
    
        adiciona: function(titulo, texto, secao){
            var nota = {
                titulo: titulo,
                texto: texto,
                edit: false
                
            };
        
            //adicionar nota na lista
        
            this.lista.push(nota);

            atualizarSecao(secao);
        
    
        },
    
        remove: function(index, secao){
            this.lista.splice(index,1);

            atualizarSecao(secao);
        },
    
        edita: function(index, secao){
    
            this.lista[index].edit=true;
            atualizarSecao(secao);
        },
    
        salva: function(index, titulo, texto, secao){

            this.lista[index].titulo = titulo;
            this.lista[index].texto = texto;
    
            this.lista[index].edit = false;
    
             atualizarSecao(secao);
    
        }
    
    
    }


function atualizarSecao(secao) {


    // criar variavel p guardar o html das notas

    var template = "";


    //percorrer a lista de notas e criar o template das notas



    for (var i = 0; i < listaNotas.lista.length; i++) {


        if (listaNotas.lista[i].edit) {

            //    var teste = listaNotas.lista[i].edit = false;

            template += '<form class="note" id="form">' +
                '<input class="note__title" name="title" value="' + listaNotas.lista[i].titulo + '" </input>' +
                '<textarea class="note__body" name="text">' + listaNotas.lista[i].texto + '</textarea>' +
                '<button class="note__close" type="button" onclick="removerNota(event,' + i + ', this.form.parentElement)">' +
                '<i class="fa fa-times" aria-hidden="true"></i>' +
                '</button>' +
                '<button class="note__control" type="button" onclick="atualizarNota(this.form.title, this.form.text, this.form, this.form.parentElement, '+ i +')">' +
                'Salvar' +    
                '</button>' 
                '</form>'; 

        }

        else {

            template += '<form class="note" id="form" onclick="editarNota(' + i + ', this.parentElement, )">' +
                '<h1 class="note__title" name="title">' + listaNotas.lista[i].titulo + ' </h1>' +
                '<label class="note__body" name="text">' + listaNotas.lista[i].texto + '</label>' +
                '<button class="note__close" type="button" onclick="removerNota(event,' + i + ', this.form.parentElement)">' +
                '<i class="fa fa-times" aria-hidden="true"></i>' +
                '</button>' +
                '</form>';



        }

    }
    // colocar o html de tdo mundo (inner) dentro da secao

    secao.innerHTML = template;

}

function removerNota(evento, index, secao) {
    evento.stopPropagation();

    listaNotas.remove(index, secao);
}

function editarNota(index, secao) {

    listaNotas.edita(index, secao);
    return false;

}

function atualizarNota(inputTitulo, textareaTexto, form, secao, index){
   
        titulo= inputTitulo.value;
        texto= textareaTexto.value;

   

    

    listaNotas.salva(index, titulo, texto, secao);
}


function adicionarNota(inputTitulo, textareaTexto, form, secao) {

    
        var titulo= inputTitulo.value;
        var texto= textareaTexto.value;
          

        listaNotas.adiciona(titulo, texto, secao);
        

        //  listaNotas.adiciona(titulo, texto, secao);
         form.reset();

    
}