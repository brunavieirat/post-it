function FormButton (props){


    let botaoSalvar = document.createElement('button');


    botaoSalvar.setAttribute('class', props.className);
    botaoSalvar.setAttribute('type', props.type);
    botaoSalvar.addEventListener('click', props.onclick);

    botaoSalvar.innerHTML = props.children;

    return botaoSalvar;


    // '<button class="note__control" type="button" onclick="atualizarNota(this.form.title, this.form.text, this.form, this.form.parentElement, '+ i +')">' +
    //             'Salvar' +    
    //             '</button>' 
                

}

export default FormButton;