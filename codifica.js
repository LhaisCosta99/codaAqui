const mensagem = document.getElementById("mensagem")
const criptografar = document.getElementById("criptografar")
const decriptografar = document.getElementById("decriptografar")
const resultado = document.getElementById("resultado")

criptografar.addEventListener("click", (event)=> {
    event.preventDefault()
    if(mensagem.value){
        const resposta = codificador(mensagem.value)
    
        resultado.innerHTML = `
            <h2>Resultado da sua mensagem:</h2>
            <p>${resposta}</p>
        `
    
        mensagem.value = ""
    } else {
        resultado.innerHTML = `
        <h2>Nenhuma mensagem encontrada</h2>
        <p>Digite um texto que você deseja criptografar ou descriptografar.</p>
        `
    }
})

const dicionario = {
    a: "ai",
    e: "enter",
    i: "imes",
    o: "ober",
    u: "ufat"
}

function codificador (string){
    const entrada = string.split("")

    const saida = entrada.map(el => {
        if(dicionario[el]){
            return dicionario[el]
        } else {
            return el
        }
    })

    return saida.join("")
}

function decodificador(string){
    const chaves = Object.values(dicionario)
    let saida = string
    
    chaves.forEach(el => {
        saida = saida.split(el).join(el[0])
    })

    return saida
}