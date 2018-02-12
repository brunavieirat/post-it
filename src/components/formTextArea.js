function FormTextArea(props){


    let inputTexto = document.createElement('textarea');

    inputTexto.setAttribute('class', props.className);
    inputTexto.setAttribute('name', props.name);
    inputTexto.setAttribute('rows', props.rows);
    inputTexto.setAttribute('placeholder', props.placeholder);
    // 

  if (props.readonly) {
      inputTexto.setAttribute('readonly', true);
  }

  inputTexto.innerHTML = props.children;
    // '<textarea class="note__body" name="text">' + listaNotas.lista[i].texto + '</textarea>' +
    return inputTexto;  
}


export default FormTextArea;