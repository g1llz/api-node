const request = require('request-promise');
const convert = require('xml-js');

const psURL = process.env.PAG_url;

const sign = deps => {
    const { errorHandler } = deps;
    return {
        assign: (customer) => {
            const options = {
                headers: {
                    'Content-Type': 'application/json;charset=ISO-8859-1',
                    'Accept': 'application/vnd.pagseguro.com.br.v3+json;charset=ISO-8859-1'
                },
                uri: `${psURL}/pre-approvals`,
                qs: {
                    email: process.env.PAG_email,
                    token: process.env.PAG_token
                },
                body: customer,
                json: true,
                method: 'POST'
            }
            console.log(options.body);
            return new Promise((resolve, reject) => {
                request(options)
                    .then((res) => {
                        if (res.code) {
                            resolve({ message: 'Usuário vinculado ao plano.', res })
                        }
                    })
                    .catch((error) => {
                        errorHandler(error, 'Falha ao vincular usuário ao plano.', reject);
                        return false;
                    });
            });
        },
        create: plan => {
            const options = {
                headers: {
                    'Content-Type': 'application/json;charset=ISO-8859-1 ',
                    'Accept': 'application/vnd.pagseguro.com.br.v3+json;charset=ISO-8859-1'
                },
                uri: `${psURL}/pre-approvals/request`,
                qs: {
                    email: process.env.PAG_email,
                    token: process.env.PAG_token
                },
                body: {
                    reference: plan.reference,
                    preApproval: {
                        name: plan.name,
                        charge: 'AUTO',
                        period: 'MONTHLY',
                        amountPerPayment: plan.amountPerPayment,
                        expiration: {
                            value: '24',
                            unit: 'MONTHS'
                        },
                        details: plan.details
                    },
                    receiver: {
                        email: process.env.PAG_email
                    }
                },
                json: true,
                method: 'POST'
            }
            return new Promise((resolve, reject) => {
                request(options)
                    .then((res) => {
                        resolve(res);
                    })
                    .catch((error) => {
                        errorHandler(error, 'Falha ao criar plano.', reject);
                        return false;
                    });
            });
        },
        start: () => {
            const options = {
                headers: {
                    'Content-Type': 'application/json;charset=ISO-8859-1'
                },
                uri: `${psURL}/v2/sessions`,
                qs: {
                    email: process.env.PAG_email,
                    token: process.env.PAG_token
                },
                method: 'POST'
            }
            return new Promise((resolve, reject) => {
                request(options).then((res) => {
                    let json = convert.xml2js(res, { compact: true, spaces: 4 })
                    resolve(json.session.id._text);
                }).catch((error) => {
                    errorHandler(error, 'Falha ao iniciar o pagamento.', reject);
                    return false;
                });
            })
        }
    }
}

module.exports = sign;
