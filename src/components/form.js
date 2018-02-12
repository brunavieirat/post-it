function Form (props){

    let formularioNotas = document.createElement('form');

    formularioNotas.setAttribute('class', props.className);
  
    // <form class="note" id="form">

    // contagem ate o ultimo filho (nota)
    for (var index = 0; index < props.children.length; index ++){

        //insere cada filho por posição
        formularioNotas.appendChild(props.children[index]);

    }

    formularioNotas.addEventListener('click', props.onclick);

    return formularioNotas;

}

export default Form;