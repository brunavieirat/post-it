function FormInput (props){

    let inputTitulo = document.createElement('input');

    inputTitulo.setAttribute('class', prop.className);
    inputTitulo.setAttribute('type', props.type)
    inputTitulo.setAttribute('name', props.name);
    inputTitulo.setAttribute('placeholder', props.placeholder);
    inputTitulo.setAttribute('value', props.value);

    // '<input class="note__title" name="title" value="' + listaNotas.lista[i].titulo + '" </input>' 

    // inputTitulo.setAttribute('class', props.className);
    // inputTitulo.setAttribute('type', props.type);
    // inputTitulo.setAttribute('name', props.name);
    // inputTitulo.setAttribute('placeholder', props.placeholder);
    // inputTitulo.setAttribute('value', props.value);

    if (props.readonly) {
        inputTitulo.setAttribute('readonly', true);
    }

    return inputTitulo;

}

export default FormInput;