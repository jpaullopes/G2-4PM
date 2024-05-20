import { GetNumberBetween , print, Input} from "./utils.js"

//pra arrumar a formatação do número ;) e deixar bonito
function PraDeixarBonito(Numero){

    let NumeroFormatado = Numero
    if (Numero < 10){
        NumeroFormatado = `0${Numero}`
    }

    return NumeroFormatado
}


//função de conversão de horario militar em AM/PM
function ConvertorAM_PM(Horas,Minutos,Segundos){
    let Periodo = 'AM'
    let HoraFormatada = parseInt(Horas)

    if(HoraFormatada > 12){
        HoraFormatada -= 12
        Periodo = 'PM'
    }
    if(HoraFormatada === 0){
        HoraFormatada = 12
    }

    HoraFormatada = PraDeixarBonito(HoraFormatada)
    const MinutoFormatado = PraDeixarBonito(Minutos)
    const SegundoFormatado = PraDeixarBonito(Segundos)

    return `${HoraFormatada}:${MinutoFormatado}:${SegundoFormatado} ${Periodo}`
}


//função de conversão de horario AM/PM em militar
function ConvertorHorarioMilitar(Horas,Minutos,Segundos,Periodo){
    let HoraFormatada = parseInt(Horas)

    if(Periodo === 'PM'){
        HoraFormatada += 12        
    }

    if(HoraFormatada >= 24){
        HoraFormatada = 0
    }

    HoraFormatada = PraDeixarBonito(HoraFormatada)
    const MinutoFormatado = PraDeixarBonito(Minutos)
    const SegundoFormatado = PraDeixarBonito(Segundos)

    return `${HoraFormatada}:${MinutoFormatado}:${SegundoFormatado}`
}


//pra pedir o turno/periodo(AM/PM)
function Pedir(Texto){
    let Resposta = Input(Texto).toUpperCase()

    while( Resposta !== 'AM' && Resposta !== 'PM'){
        print('Informe uma resposta válida!')
        Resposta = Input(Texto).toUpperCase()
    }

    return Resposta
}


function main(){

    let Option = 1 //declaro a variavel 'opção'
    const EscolhasPossiveis = `
    SAIR DO CONVERSOR DE HORÁRIOS      - [0]
    CONVERTER HORÁRIO MILITAR EM AM/PM - [1]
    CONVERTER HORÁRIO AM/PM EM MILITAR - [2]
    `

    while(Option !== 0){
        //exibição das escolhas
        print(EscolhasPossiveis)

        //entrada da opção do usuario
        Option = GetNumberBetween('Informe a sua opção: ',0,2)

        //convertor de horario militar para o AM/PM
        if(Option === 1){

            //entrada de dados
            let Horas = GetNumberBetween('Horas: ',0,24)
            let Minutos = GetNumberBetween('Minutos: ',0,59)
            let Segundos = GetNumberBetween('Segundos: ',0,59)

            //formatação do horario
            const HorarioFormatado = ConvertorAM_PM(Horas,Minutos,Segundos)

            //exibição
            print(HorarioFormatado)
        }
        //convertor de horario AM/PM para militar
        else if(Option === 2){

            //entrada de dados
            let Horas = GetNumberBetween('Horas: ',0,12)
            let Minutos = GetNumberBetween('Minutos: ',0,59)
            let Segundos = GetNumberBetween('Segundos: ',0,59)
            let Periodo = Pedir('Informe o periodo[AM/PM]:')

            //formatação do horario
            const HorarioFormatado = ConvertorHorarioMilitar(Horas,Minutos,Segundos,Periodo)

            //exibição
            print(HorarioFormatado)   

        }

        //dar aquela limpada no terminal né
        Input('Pressione "Enter"...')
        console.clear()

    }
    print('[ FIM DO PROGRAMA ]')

}

main()