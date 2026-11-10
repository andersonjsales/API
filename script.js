//linguagem de programação;

const url = "viacep.com.br/ws/0100100/json/";

//fetch => Pega os dados da API
// then => decide o que eu vou fazer com a resposta do fetch
    function buscarApi(rota){ 
        fetch("https://jsonplaceholder.typicode.com/" + rota)
        .then(resposta => resposta.json())
        .then(data => {
            console.log("Lista de: " + rota)
          console.log(data)
        })
    }

    buscarApi("posts")
    buscarApi("users")