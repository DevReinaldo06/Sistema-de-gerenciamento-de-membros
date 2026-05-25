📁 Estrutura de Arquivos
meu-sistema-web/
├── index.html
├── principal.html
├── paginas/
│   ├── cadastrar-integrante.html
│   ├── lista-integrantes.html
│   ├── dados-adm.html
│   └── editar-adm.html
├── css/
│   └── estilos.css
└── js/
    ├── api.js
    ├── login.js
    ├── integrantes.js
    └── admin.js

🧠 Camada de Dados — /js/
ArquivoResponsabilidadeapi.jsArmazena a URL base da API. Ponto único de configuração da conexão com o banco.login.jsCaptura e-mail e senha do formulário → consulta o banco → redireciona ou exibe erro.integrantes.jsCRUD completo: busca a lista (GET), cadastra (POST), edita (PUT) e exclui (DELETE) integrantes sem recarregar a página.admin.jsCaptura novo e-mail/senha → atualiza o banco → redireciona para dados-adm.html.

🎨 Camada Visual — HTML e CSS
ArquivoConteúdoindex.htmlFormulário de login. Chama login.js.principal.htmlMenu/dashboard com ícone de perfil e botões de navegação.cadastrar-integrante.htmlFormulário com campos do integrante (nome, tipo, idade, aniversário, bairro, igreja anterior, batizado).lista-integrantes.htmlTabela com linhas preenchidas dinamicamente por integrantes.js.dados-adm.htmlExibe e-mail e senha do ADM (injetados via JS). Botão para edição.editar-adm.htmlFormulário de alteração de e-mail e senha do ADM.estilos.cssTodas as regras visuais: cores, fontes, responsividade, layouts de tabelas e formulários.