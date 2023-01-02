const mesagem = document.getElementById("mensagem")

const dicionario = {
    a: "ai",
    e: "enter",
    i: "imes",
    o: "ober",
    u: "ufat"
}

function conversor (string){
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