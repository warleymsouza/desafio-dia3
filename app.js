let area = prompt ('Se quiser serguir para área de Font-End, digite 1 ou se quiser seguir para área de Back-End, digite 2');
if(area == '1'){
    let front = prompt ('Você escolheu Front-End, gostaria de aprender React ou aprender Vue?');
}else{
    let back = prompt ('Você escolheu Back-End, gostaria de aprender C# ou aprender Java?');
}

let seguir = prompt('Se você deseja seguir se especializando na área escolhida, digite: SIM. Mas se deseja seguir se desenvolvendo para se tornar Fullstack, digite: FULL?');
seguir = seguir.toLowerCase();

if(seguir == 'sim'){
    alert('Você optou por continuar se especializando na área escolhida');
}else{
    alert('Você pretende segui se desenvolvendo para se tornar Fullstack');
}

let tecnologia = prompt('Quais são das tecnologias que você gostaria de se especializar ou aprender?');
let tecnologias = [tecnologia];

let resposta = prompt('Tem mais alguma tecnologia que você gostaria de aprender? Se sim, responda ok');
while(resposta.toLowerCase() == 'ok'){
    let novaTecnologia = prompt ('Digite a tecnologia:');
    tecnologias.push(novaTecnologia);
    resposta = prompt('Tem mais alguma tecnologia que você gostaria de aprender? Se sim, responda ok');
}

alert('Você escolheu as seguintes tecnologias:\n' + tecnologias.join(','));