const products = deps => {
    const { connect, errorHandler } = deps;
    return {
        all: () => {
            return new Promise((resolve, reject) => {
                connect.query('SELECT * FROM product', (error, results) => {
                    if (error) {
                        errorHandler(error, 'Falha ao listar os produtos.', reject);
                        return false;
                    };
                    resolve({ pruducts: results });
                });
            })
        },
        save: (code, name, desc, price) => {
            return new Promise((resolve, reject) => {
                connect.query('INSERT INTO product (code_product, nam_product, desc_product, val_product) VALUES (?, ?, ?, ?)', [code, name, desc, price], (error, results) => {
                    if (error) {
                        errorHandler(error, 'Falha ao cadastrar produto.', reject);
                        return false;
                    };
                    resolve({ pruducts: {
                        code_product: code,
                        nam_product: name,
                        desc_product: desc,
                        val_product: price,
                        id: results.insertId
                    } });
                });
            })
        },
        update: (id, product) => {

        },
        del: (id) => {

        }
    }
}

module.exports = products;
