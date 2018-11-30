const request = require('request');

const psURL = process.env.PAG_url;
const email = process.env.PAG_email;
const token = process.env.PAG_token;

const create = (name, amountPerPayment, reference) => {
    const options = {
        headers: {
            'Content-Type': 'application/json;charset=ISO-8859-1 ',
            'Accept': 'application/vnd.pagseguro.com.br.v3+json;charset=ISO-8859-1'
        },
        url: `${psURL}/request?email=${email}&token=${token}`,
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
                email: email
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
