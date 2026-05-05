# crud-full-funcionary

CRUD completo para o recurso funcionário usando Node.js, Express e MySQL.

## Estrutura de arquivos

- `src/database.js`: conexão com o banco MySQL
- `src/funcionary.js`: lógica de inserir, listar, atualizar e excluir
- `src/index.js`: rotas da API e servidor

## Como usar

1. Instale as dependências:

```bash
npm install
```

2. Configure o MySQL em `src/database.js`:

- `host`
- `user`
- `password`
- `database`

3. Crie o banco e a tabela MySQL:

```sql
CREATE DATABASE crud_funcionario;
USE crud_funcionario;

CREATE TABLE funcionarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  cargo VARCHAR(100) NOT NULL,
  salario DECIMAL(10,2) NOT NULL
);
```

4. Inicie a API:

```bash
npm start
```

5. Endpoints disponíveis:

- `POST /funcionarios` - criar funcionário
- `GET /funcionarios` - listar todos
- `GET /funcionarios/:id` - buscar por id
- `PUT /funcionarios/:id` - atualizar
- `DELETE /funcionarios/:id` - excluir

## Exemplo de payload `POST`

```json
{
  "nome": "João",
  "cargo": "Desenvolvedor",
  "salario": 3500.00
}
```
