function FormTextArea(props){


    let inputTexto = document.createElement('textarea');

    inputTexto.setAttribute('class', props.className);
    inputTexto.setAttribute('name', props.name);
    inputTexto.innerHTML = props.children;

  if (props.readonly) {
      inputTexto.setAttribute('readonly', true);
  }

    // '<textarea class="note__body" name="text">' + listaNotas.lista[i].texto + '</textarea>' +
    return inputTexto;  
}

export default FormTextArea;