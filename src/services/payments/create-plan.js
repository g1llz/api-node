const request = require('request');
const create = (name, amountPerPayment, reference) => {
    const options = {
        headers: { 'Content-Type': 'application/json;charset=ISO-8859-1 ', 'Accept': 'application/vnd.pagseguro.com.br.v3+json;charset=ISO-8859-1' },
        url: 'https://ws.sandbox.pagseguro.uol.com.br/pre-approvals/request?email=*.com&token=*',
        body: JSON.stringify({
            reference: reference,
            preApproval: {
                name: name,
                charge: 'AUTO',
                period: 'MONTHLY',
                amountPerPayment: amountPerPayment,
                expiration: {
                    value: '24',
                    unit: 'MONTHS'
                }
            },
            receiver: {
                email: '*'
            }
        })
    }
    return new Promise((resolve, reject) => {
        request.post(options, (error, response, body) => {
            if (error) {
                reject(error);
            }
            resolve(body);
        });
    });
};

module.exports = create;
