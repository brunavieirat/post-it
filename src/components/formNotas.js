//criar as notas, deverão ser importados todos os elementos a serem utilizados

import FormInput from './formInput';
import FormButton from './formButton';
import FormTextArea from './formTextArea';

import Form from './form';



function FormNotas(props){

    let formNotas;
// criar os elementos, passando os valores informados no props dos elementos

let inputTitulo = new FormInput({

    className: 'note__title',
    type: 'text',
    name: 'title',
    placeholder: 'Título',
    readonly: !props.notaAtual.edit,
    value: props.notaAtual.titulo
});
let inputTexto = new FormTextArea({

    className: 'note__body',
    name: 'text',
    placeholder: 'Criar uma nota...', 
    rows: 5, 
    readonly: !props.notaAtual.edit,
    children: props.notaAtual.texto,
    
});



let children;
let click;

let botaoConcluido = new FormButton({

    className: 'note__control',
    type: 'button',
    children: 'Concluído',
    click: () => {
        props.adicionarNota(inputTitulo, inputTexto, formNotas, props.index)
    
    }

});



let botaoRemover = new FormButton({

    className: 'note__control',
    type: 'button',
    children: '<i class="fa fa-times" aria-hidden="true"></i>',
    click: event => {
        props.removerNota(event, index);
    }
});


children = [botaoRemover, inputTitulo, inputTexto, formNotas, botaoConcluido];

formNotas = new Form({

    className: 'note',
    children: children,
    click: click
});

return formNotas;


}

export default FormNotas;