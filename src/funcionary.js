const db = require('./database');

function addEmployee(employee, callback) {
  const sql = 'INSERT INTO funcionarios (nome, cargo, salario) VALUES (?, ?, ?)';
  db.query(sql, [employee.nome, employee.cargo, employee.salario], (err, result) => {
    if (err) return callback(err);
    callback(null, { id: result.insertId, ...employee });
  });
}

function getAllEmployees(callback) {
  const sql = 'SELECT * FROM funcionarios';
  db.query(sql, (err, results) => {
    if (err) return callback(err);
    callback(null, results);
  });
}

function getEmployeeById(id, callback) {
  const sql = 'SELECT * FROM funcionarios WHERE id = ?';
  db.query(sql, [id], (err, results) => {
    if (err) return callback(err);
    callback(null, results[0]);
  });
}

function updateEmployee(id, employee, callback) {
  const sql = 'UPDATE funcionarios SET nome = ?, cargo = ?, salario = ? WHERE id = ?';
  db.query(sql, [employee.nome, employee.cargo, employee.salario, id], (err, result) => {
    if (err) return callback(err);
    callback(null, result.affectedRows);
  });
}

function deleteEmployee(id, callback) {
  const sql = 'DELETE FROM funcionarios WHERE id = ?';
  db.query(sql, [id], (err, result) => {
    if (err) return callback(err);
    callback(null, result.affectedRows);
  });
}

module.exports = {
  addEmployee,
  getAllEmployees,
  getEmployeeById,
  updateEmployee,
  deleteEmployee
};
