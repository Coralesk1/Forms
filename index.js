const pessoas = [];
function forms_pessoa() {
    
    const nome = document.getElementById("input_Nome").value;
    const sobrenome = document.getElementById("input_Sobrenome").value;
    const peso = document.getElementById("input_Peso").value;
    const altura = document.getElementById("input_Altura").value;

    return {
        nome: nome,
        sobrenome: sobrenome,
        peso: peso,
        altura: altura
    };
}
function array_pessoa(){
    const form_pessoa = forms_pessoa();
    pessoas.push(form_pessoa)
    console.log(pessoas);

    document.getElementById("saida").innerHTML += `
        <p>Meu nome é ${form_pessoa.nome} ${form_pessoa.sobrenome}</p>
        <p>Peso: ${form_pessoa.peso}</p>
        <p>Altura: ${form_pessoa.altura}</p>
        <hr>
    `;
}
