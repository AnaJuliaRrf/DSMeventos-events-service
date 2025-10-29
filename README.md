DSMeventos – Equipe 2 (Serviço de Eventos)
Membros do Grupo
Ana Julia Ferreira
Gabriel Antonio
Guilherme Laurindo
Gustavo S. Daniel
Lucas Campos
Miguel Luperi

Descrição do Serviço
O Serviço de Eventos é o segundo microserviço do projeto DSMeventos, responsável pelo gerenciamento completo de eventos da plataforma.
Ele permite que os usuários criem, visualizem, atualizem e removam eventos, integrando-se com os demais serviços do sistema (como autenticação e inscrições).

Repositório
Nome: DSMeventos-events-service

Responsabilidades
Implementar o CRUD de eventos:
Criar (POST)
Ler (GET)
Atualizar (PUT)
Deletar (DELETE)
Garantir a persistência dos dados no banco MongoDB Atlas
Fornecer endpoints REST para integração com outros serviços

Tecnologias Utilizadas
Node.js
Express
MongoDB (via Mongoose)
Prisma (não utilizado diretamente, mas parte do escopo do projeto)
swagger-ui-express
swagger-jsdoc

