/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function FormInput(props) {

    let inputTitulo = document.createElement('input');

    inputTitulo.setAttribute('class', props.className);
    inputTitulo.setAttribute('type', props.type);
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

/* harmony default export */ __webpack_exports__["a"] = (FormInput);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function FormTextArea(props) {

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

/* harmony default export */ __webpack_exports__["a"] = (FormTextArea);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function FormButton(props) {

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

/* harmony default export */ __webpack_exports__["a"] = (FormButton);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_formInput_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_formTextArea_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_formButton_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__listaNotas_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_formNotas_js__ = __webpack_require__(6);
// importar dados a serem apresentados






let secao = document.getElementsByClassName('notes')[0];

const observaMudancasNaLista = () => {
    atualizarSecao(secao);
};

const listaNotas = new __WEBPACK_IMPORTED_MODULE_3__listaNotas_js__["a" /* default */](observaMudancasNaLista);

window.adicionarNota = (inputTitulo, inputTexto, formulario, index) => {

    if (listaNotas.pega(index)) {

        listaNotas.salva(index, inputTitulo.value, inputTexto.value);
    } else {

        listaNotas.adiciona(inputTitulo.value, inputTexto.value);
        formulario.reset();
    }
};

window.atualizarSecao = secao => {
    secao.innerHTML = "";

    for (let index = 0; index < listaNotas.contaTotal(); index++) {

        let notaAtual = listaNotas.pega(index);

        const props = {

            index: index,
            notaAtual: notaAtual,
            editarNota: editarNota,
            adicionarNota: adicionarNota,
            removerNota: removerNota
        };

        secao.appendChild(new __WEBPACK_IMPORTED_MODULE_4__components_formNotas_js__["a" /* default */](props));
    }
};

window.editarNota = index => listaNotas.edita(index);

window.removerNota = (evento, index) => {

    evento.stopPropagation();
    listaNotas.remove(index);
};

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__nota_js__ = __webpack_require__(5);


class ListaNotas {

    constructor(observador) {

        this._lista = [];
        this._observador = observador;
    }

    adiciona(titulo, texto) {
        // Cria um elemento Nota (importado do arquivo nota.js)
        // é necessário passar os parametros q sao solicitados na classe do outro arquivo (novoTitulo, novoTexto)
        let nota = new __WEBPACK_IMPORTED_MODULE_0__nota_js__["a" /* default */](titulo, texto);

        //pegar o array de lista e adicionar a nota com parametros passados anteriormente
        this._lista.push(nota);

        this._observador();
    }

    remove(index) {
        //remove um valor da lista, iniciando pela posicao recebida
        this._lista.splice(index, 1);
        this._observador();
    }

    edita(index) {

        //pega a posição (objeto) e informa q o mesmo esta sendo editado
        this._lista[index].edit = true;
        this._observador();
    }

    salva(index, titulo, texto) {
        //recebe a posição, o titulo e o texto que deverão ser alterados (novos valores)
        //passa os valores digitados para o objeto da lista
        this._lista[index].titulo = titulo;
        this._lista[index].texto = texto;

        //apos editar indica que nao esta mais editando e salva
        this._lista[index].edit = false;

        this._observador();
    }

    pega(index) {

        //pega a posicao do objeto da lista   
        return this._lista[index];
    }

    contaTotal() {
        return this._lista.length;
    }

};

/* harmony default export */ __webpack_exports__["a"] = (ListaNotas);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Nota {
    constructor(novoTitulo, novoTexto) {

        this.titulo = novoTitulo;
        this.texto = novoTexto;
        this.editando = false;
    }
}
/* harmony default export */ __webpack_exports__["a"] = (Nota);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__formInput__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__formButton__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__formTextArea__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__form__ = __webpack_require__(7);
//criar as notas, deverão ser importados todos os elementos a serem utilizados







function FormNotas(props) {

    let formNotas;
    // criar os elementos, passando os valores informados no props dos elementos

    let inputTitulo = new __WEBPACK_IMPORTED_MODULE_0__formInput__["a" /* default */]({

        className: 'note__title',
        type: 'text',
        name: 'title',
        placeholder: 'Título',
        readonly: !props.notaAtual.edit,
        value: props.notaAtual.titulo
    });
    let inputTexto = new __WEBPACK_IMPORTED_MODULE_2__formTextArea__["a" /* default */]({

        className: 'note__body',
        name: 'text',
        placeholder: 'Criar uma nota...',
        rows: 5,
        readonly: !props.notaAtual.edit,
        children: props.notaAtual.texto

    });

    let children;
    let click;

    let botaoConcluido = new __WEBPACK_IMPORTED_MODULE_1__formButton__["a" /* default */]({

        className: 'note__control',
        type: 'button',
        children: 'Concluído',
        click: () => {
            adicionarNota(inputTitulo, inputTexto, formNotas, index);
        }

    });

    let botaoRemover = new __WEBPACK_IMPORTED_MODULE_1__formButton__["a" /* default */]({

        className: 'note__control',
        type: 'button',
        children: '<i class="fa fa-times" aria-hidden="true"></i>',
        click: event => {
            removerNota(event, index);
        }
    });

    children = [botaoRemover, inputTitulo, inputTexto, botaoConcluido];

    formNotas = new __WEBPACK_IMPORTED_MODULE_3__form__["a" /* default */]({

        className: 'note',
        children: children,
        click: click
    });

    return formNotas;
}

/* harmony default export */ __webpack_exports__["a"] = (FormNotas);

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function Form(props) {

    let formularioNotas = document.createElement('form');

    formularioNotas.setAttribute('class', props.className);

    // <form class="note" id="form">

    // contagem ate o ultimo filho (nota)
    for (var index = 0; index < props.children.length; index++) {

        //insere cada filho por posição
        formularioNotas.appendChild(props.children[index]);
    }

    formularioNotas.addEventListener('click', props.onclick);

    return formularioNotas;
}

/* harmony default export */ __webpack_exports__["a"] = (Form);

/***/ })
/******/ ]);