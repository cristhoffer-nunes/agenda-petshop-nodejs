const conexao = require('../infraestrutura/database/conexao')
const uploadDeArquivo = require('../infraestrutura/arquivos/uploadDeArquivos')

class Pet{
    adicionar(pet,res){
        const query = 'INSERT INTO Pets SET ?'

        uploadDeArquivo(pet.imagem,pet.nome,(erro,novoCaminho)=>{
            const novoPet = {nome: pet.nome, imagem: novoCaminho}
            if(erro){   
                res.status(400).json({erro})
            }else{
                conexao.query(query, novoPet,erro =>{
                    if(erro){
                        res.status(400).json(erro)
                    }else{
                        res.status(200).json(pet)
                    }
                })               
            }
        })

    }
}

module.exports = new Pet()