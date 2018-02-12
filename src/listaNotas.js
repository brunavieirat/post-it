import Nota from './nota.js';

class ListaNotas{

    constructor(observardor) {


        this._lista = [];
        this._observador = observador; 
    }

    
        adiciona (titulo, texto){
           // Cria um elemento Nota (importado do arquivo nota.js)
           // é necessário passar os parametros q sao solicitados na classe do outro arquivo (novoTitulo, novoTexto)
            let  nota = new Nota(titulo, texto),

            //pegar o array de lista e adicionar a nota com parametros passados anteriormente
            this._lista.push(nota);

            this._observador();                
                
            }
        
               
        remove(index){
            //remove um valor da lista, iniciando pela posicao recebida
            this.lista.splice(index,1);

        }
    
        edita(index){
            
            //pega a posição (objeto) e informa q o mesmo esta sendo editado
            this.lista[index].edit=true;
            this._observador();  
        }
    
        salva(index, titulo, texto){
            //recebe a posição, o titulo e o texto que deverão ser alterados (novos valores)
            //passa os valores digitados para o objeto da lista
            this.lista[index].titulo = titulo;
            this.lista[index].texto = texto;
            
            //apos editar indica que nao esta mais editando e salva
            this.lista[index].edit = false;

            this._observador();
        
        }

        pega(posicao){

            //pega a posicao do objeto da lista   
            return this.lista[index];
        }
    
        contaTotal(){
            return this._lista.length;
        }
    
    };

export default ListaNotas;
