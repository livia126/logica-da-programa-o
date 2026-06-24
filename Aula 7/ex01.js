let alunos = [{
    nome: "Duda" , idade:"22",
    nome: "Mariane",idade:"22",
    nome: "Estela",idade:"20",
    nome: "Ana", idade:"20",
    nome: "Bianca",idade:"18",
    nome: "Marcelly",idade:"17"}];
    for(let i = 0; i<alunos.length; i++){
        if(alunos[i].idade >=18) {
         console.log(`${alunos[i].nome} é maior de idade`);
        }else{
         console.log(`${alunos[i].nome} é menor de idade`);
        }
    }