const create = require('../payments/create-plan');

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
        save: (name, amountPerPayment, reference) => {
            return new Promise((resolve, reject) => {
                create(name, amountPerPayment, reference)
                    .then((res) => {
                        resolve(res);
                    }).catch((error) => {
                        errorHandler(error, 'Falha ao cadastrar o plano.', reject);
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
