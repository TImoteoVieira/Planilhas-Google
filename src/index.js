const credentials = require('./credentials.json')
const {GoogleSpreadsheet} = require('google-spreadsheet')
require('dotenv').config()
const spreadsheetId = process.env.SHEET_ID

const doc = new GoogleSpreadsheet(spreadsheetId)

async function auth() {
  await doc.useServiceAccountAuth(credentials)
  await doc.loadInfo()
  return doc
} 

// validando autenticação e imprimindo o titulo da planilha
auth().then(doc => {
  console.log(doc.title);
});

//adicionando colunas a tabela
auth().then(doc => {
  const sheet = doc.sheetsByIndex[0]
  sheet.setHeaderRow(['nome', 'idade', 'email'])
  .then(() => {
      console.log('Colunas adicionadas')
  })
});

//adicionando valores a tabela
auth().then(doc => {
    const sheet = doc.sheetsByIndex[0];
    sheet.addRow({
        nome: "Timóteo",
        idade: 25,
        email: "timoteo@gmail"
    }).then(() => {
        console.log('Valores da coluna adicionadas')
    })
});

//listando valores da coluna 'nome'
auth().then(doc => {
    const sheet = doc.sheetsByIndex[0];
    sheet.getRows().then(rows => {
        rows.map(row => {
            console.log(row.nome);
        })
    })
})

//atualizando valores da tabela
auth().then(doc => {
    const sheet = doc.sheetsByIndex[0];
    sheet.getRows().then(rows => {
        rows.map(row => {
            if(row.nome === "Timóteo"){
                row.nome = "Timóteo - atualizado";
                row.idade = 24.11;
                row.email = "tm@gmail"
                
                row.save().then(() => {
                    console.log('Campos atualizados');
                });
            }
        });
    })
})

//deletando valores da coluna
auth().then(doc => {
  sheet = doc.sheetsByIndex[0];
  sheet.getRows().then(rows => {
      rows.map(row => {
          if(row.nome === "Timóteo"){
              row.delete().then(() => {
                  console.log('Valor do campo nome deletado');
              });
          }
      });
  })
})

