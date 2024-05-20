import { question } from "readline-sync";

export function GetNumber(Texto){
    return Number(question(Texto))
}

export function print(Texto){
    return console.log(Texto)
}

export function GetNumberInteger(Texto){
    return parseInt(question(Texto))
}


export function Input(Texto){
    return question(Texto)
}


export function GetNumberMin(Texto, Min){
    let Numero = GetNumberInteger(Texto)

    while(Numero < Min){
        print('Valor Inválio!')
        Numero = GetNumber(Texto)
    }

    return Numero
}

export function GetNumberBetween(Texto, Min, Max){
    let Numero = GetNumberInteger(Texto)

    while(Numero < Min || Numero > Max){
        print('Valor Inválio!')
        Numero = GetNumber(Texto)
    }

    return Numero
}

export function ClearTerminal(){
    Input('Pressione ENTER...')
    console.clear()
}