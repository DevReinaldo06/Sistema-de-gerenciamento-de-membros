📁 Estrutura de Arquivos
meu-sistema-web/   
├── index.html   
├── principal.html  
├── paginas/
    ├── cadastrar-integrante.html  
    ├── lista-integrantes.html  
    ├── dados-adm.html  
    └── editar-adm.html

├── css/ 

    └── estilos.css   
└── js/ 

    ├── api.js   
    ├── login.js   
    ├── integrantes.js   
    └── admin.js



🧠 Camada de Dados — /js/ 


api.js 
— Armazena a URL base da API. Ponto único de configuração da conexão com o banco.

login.js 
— Captura e-mail e senha do formulário → consulta o banco → redireciona ou exibe erro.

integrantes.js
— CRUD completo: busca a lista (GET), cadastra (POST), edita (PUT) e exclui (DELETE) integrantes
sem recarregar a página.

admin.js
— Captura novo e-mail/senha → atualiza o banco → redireciona para dados-adm.html.



🎨 Camada Visual — HTML e CSS 


index.html 
— Formulário de login. Chama login.js.

principal.html 
— Menu/dashboard com ícone de perfil e botões de navegação.

cadastrar-integrante.html 
— Formulário com campos do integrante (nome, tipo, idade, aniversário, 
bairro, igreja anterior, batizado).

lista-integrantes.html 
— Tabela com linhas preenchidas dinamicamente por integrantes.js.

dados-adm.html 
— Exibe e-mail e senha do ADM (injetados via JS). Botão para edição.

editar-adm.html 
— Formulário de alteração de e-mail e senha do ADM.

style.css 
Todas as regras visuais: cores, fontes, responsividade, layouts de tabelas e formulários. 
Define o padrão que todas as outras páginas da aplicação devem seguir, sendo o único arquivo CSS do projeto.
