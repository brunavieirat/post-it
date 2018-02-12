// importar dados a serem apresentados
import FormInput from './components/formInput.js';
import FormTextArea from './components/formTextArea.js';
import FormButton from './components/formButton.js';
import ListaNotas from './listaNotas.js';
import FormNotas from './components/formNotas.js';

let secao = document.getElementsByClassName('notes')[0];

const observaMudancasNaLista = () => {
    atualizarSecao(secao);
};

const listaNotas = new ListaNotas(observaMudancasNaLista);


window.adicionarNota = (inputTitulo, inputTexto, formulario, index) => {

    if (listaNotas.pega(index)) {

        listaNotas.salva(index, inputTitulo.value, inputTexto.value);
    } 
    
    else {

        listaNotas.adiciona(inputTitulo.value, inputTexto.value);
        formulario.reset();

    }

         alert('ok');
    
};


window.atualizarSecao = secao =>{
    secao.innerHTML = "" ;

    for (let index = 0; index<listaNotas.contaTotal(); index++){

        let notaAtual = listaNotas.pega(index);

        const props = {

            index: index,
            notaAtual: notaAtual,
            editarNota: editarNota,
            adicionarNota: adicionarNota,
            removerNota:removerNota
        };

        secao.appendChild(new FormNotas(props));
    }
};

window.editarNota = index => listaNotas.edita(index);

window.removerNota = (evento, index) => {

    evento.stopPropagation();
    listaNotas.remove(index);
}

