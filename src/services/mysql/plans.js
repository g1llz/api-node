const pg = require('../payments');

const plans = deps => {
    const { connect, errorHandler } = deps;
    return {
        all: () => {
            return new Promise((resolve, reject) => {
                connect.query('SELECT * FROM product', (error, results) => {
                    if (error) {
                        errorHandler(error, 'Falha ao listar os planos.', reject);
                        return false;
                    };
                    resolve({ pruducts: results });
                });
            })
        },
        save: (plan) => {
            const item = [
                plan.reference, plan.preApproval.name, plan.preApproval.details, plan.preApproval.amountPerPayment
            ];
            return new Promise((resolve, reject) => {
                pg.options().create(plan)
                    .then((res) => {
                        if (res.code) {
                            connect.query('INSERT INTO product (reference, name, details, amountPerPayment, ps_code) VALUES (?, ?, ?, ?, ?)', [...item, res.code], (error, results) => {
                                if (error || !results.affectedRows) {
                                    errorHandler(error, 'Falha ao cadastrar plano na base.', reject);
                                    return false;
                                };
                                resolve({ plan: { id: results.insertId }, affectedRows: results.affectedRows })
                            })
                        }
                    })
                    .catch((error) => {
                        errorHandler(error, 'Falha ao criar plano no PagSeguro.', reject);
                        return false;
                    });
            })
        },
        update: (id, product) => {

        },
        del: (id) => {

        }
    }
}

module.exports = plans;
