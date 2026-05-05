# crud-full-funcionary

CRUD completo para o recurso funcionário usando Node.js, Express e MySQL.

## Estrutura de arquivos

- `src/database.js`: conexão com o banco MySQL
- `src/funcionary.js`: lógica de inserir, listar, atualizar e excluir
- `src/index.js`: rotas da API e servidor

## Como usar

1. Instale as dependências:

```bash
src/ npm install
```

2. Configure o MySQL em `src/database.js`:

- `host`
- `user`
- `password`
- `database`


5. Crie o banco e a tabela MySQL:

```sql
CREATE DATABASE crud_funcionario;
USE crud_funcionario;

CREATE TABLE funcionarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  firstName VARCHAR(100) NOT NULL,
  lastName VARCHAR(100) NOT NULL,
  cargo VARCHAR(100) NOT NULL,
  salario DECIMAL(10,2) NOT NULL
);
```

4. Inicie a API:

```bash
npm start
```

5. Teste os endpoints (use Postman ou execute `testes.sh`):

- `GET /` - teste se API está funcionando
- `POST /funcionarios` - criar funcionário
- `GET /funcionarios` - listar todos
- `GET /funcionarios/:id` - buscar por id
- `PUT /funcionarios/:id` - atualizar
- `DELETE /funcionarios/:id` - excluir

## Exemplo de payload `POST`

```json
{
  "firstName": "João",
  "lastName": "Silva",
  "cargo": "Desenvolvedor",
  "salario": 3500.00
}
```

## Como testar

1. Rode `npm start` (servidor fica em http://localhost:3000)
2. Use Postman ou execute os comandos do `testes.sh` em outro terminal
3. Verifique se os dados são salvos no MySQL



