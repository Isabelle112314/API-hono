let nome: string = ""
let idade: number = 1
const cpf: string | number = "111.222.333-44"
const qualquer: [] = []
let lista: string[] = ["Tsuda"]
const obj1:{} = {id: 10, idade: 15, nome: "Tsuda"}

const obj2: user = {id: 10, idade: 150, nome: "Jordana"}

type user = {
    id: number
    idade: number
    nome: string
}

type tema = "claro" | "escuro" | "Roxo" | "Amarelo"

const meuTema:  tema = "Roxo"

type HTTPCode = 200 | 201 | 400 | 401 | 404 | 500 | 505

function acesso(url:string):HTTPCode {
    if (url === "https://github.com/"){
        return 200
    } else if (url === "http://localhost:3000/"){
        return 505 
    } else {
        return 404
    } 
    
}

console.log(acesso("https://youtube .com/"))