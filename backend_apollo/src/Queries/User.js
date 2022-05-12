const CreateUser = (
    name,
    second_name,
    first_name,
    last_name,
    date_birthday,
    email,
    phone,
    connection
) => {
    const queryInsert = `INSERT INTO users_test_ale_vargas SET ?`;
    return new Promise((resolve, reject) => {
        connection.getConnection((error, pool) => {
            if(error) throw new Error(error)
            pool.query(queryInsert, {name, second_name, first_name, last_name, date_birthday, email, phone} ,(error, res) => {
                if(error) throw new Error(error)
                pool.query(`SELECT * FROM users_test_ale_vargas WHERE id = ${res.insertId}`, (error, inserted) => {
                    resolve(inserted)
                    pool.release()
                })
            })
        })
    })
}

module.exports = { CreateUser }