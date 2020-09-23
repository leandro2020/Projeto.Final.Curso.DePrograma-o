/**
 * @returns {Array} uma lista contendo todos os usuarios do sistema
 */
function usuariosAtuais(){
    return JSON.parse(localStorage.getItem('usuarios'));
}

/**
 * @returns {Number} O id disponivel para um novo usuario
 */
function pegaNovoId(){
    let usuarios = usuariosAtuais();
    if(!usuarios || !usuarios?.length) return 0;

    return usuarios.length
}

/**
 * Essa função simula a criação de um usuario em um servidor
 * @param {Object} usuario 
 * @returns {boolean} retorna TRUE se o usuario foi criado com sucesso e FALSO caso tenha tido algum erro na criação
 */
function criarUsuario(novoUsuario){
    let usuarios = usuariosAtuais();

    // se nao tem usuarios atuais crie uma lista vazia para guardar eles
    // ou entao se currentUsers nao for uma lista tambem crie uma lista vazia para guardar os usuarios
    if(!usuarios || !usuarios?.length) usuarios = [];

    // Se usuario ja existir retornar FALSE
    for(let i = 0;i<usuarios.length;i++){
        if(usuarios[i].nomeUsuario ===  novoUsuario.nomeUsuario) return false;
    }
    
    usuarios.push(novoUsuario);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    return true;
}

/**
 * Essa funcao simula um LogIn em nosso servido falso 
 * @param {String} nomeUsuario nomeUsuario do usuario que esta tentando logar
 * @param {String} senha senha do usuario que esta tentando logar
 * 
 * @returns {boolean} TRUE - se o login foi realizado com sucesso / FALSE - se ocorreu um erro no login
 */
function logar(nomeUsuario, senha){
    const usuarios = usuariosAtuais();
    if(usuarios){
        for(let i=0;i<usuarios.length;i++){
            if(usuarios[i].nomeUsuario === nomeUsuario && usuarios[i].senha === senha){
                return usuarios[i]; // retorna o objeto do usuario que está logado
            }
        }
    }

    return false;
}

/**
 * Essa função simula execlusão de os usuario de um servidor
 * 
 * obs: USE SOMENTE PARA TESTES VOCE NUNCA QUER PERDER TODOS OS USUARIOS
 * @param {Object} usuario 
 */
function excluirTodosUsuarios(){
    localStorage.clear();
}

