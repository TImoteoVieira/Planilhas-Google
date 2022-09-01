# Manipulando planilhas google com Node.JS
&nbsp;

## Dependencias do projeto

+ dotenv
+ google-spreadsheet
+ nodemon

&nbsp;

## Tutorial

Siga o [tutorial](https://theoephraim.github.io/node-google-spreadsheet/#/getting-started/authentication) de autenticação da google-spreadsheet. 

Na sua planilha google, autorize o email da chave "client_email" que está no arquivo json de credenciais que você baixou do google console developers.

Capture o id da planilha presente em sua URL
```
https://docs.google.com/spreadsheets/d/{{SHEET_ID}}/edit?hl=pt-br#gid=0
```

Renomei o arquivo .env.example para .env e salve o id da URL na variável SHEET_ID.

Instale as dependencias.
```
npm i
```

Execute o projeto digitando no terminal.
```
nodemon
```