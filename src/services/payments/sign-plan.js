const request = require('request');
const sign = (customer) => {
    const options = {
        headers: {
            'Content-Type': 'application/json;charset=ISO-8859-1 ',
            'Accept': 'application/vnd.pagseguro.com.br.v3+json;charset=ISO-8859-1'
        },
        url: 'https://ws.sandbox.pagseguro.uol.com.br/pre-approvals?email=*&token=*',
        body: JSON.stringify({
            plan: customer.plan,
            reference: customer.reference,
            sender: {
                name: customer.name,
                email: customer.email,
                ip: customer.ip,
                hash: customer.hash,
                phone: {
                    areaCode: customer.areaCode,
                    number: customer.phoneNumber
                },
                address: {
                    street: customer.street,
                    complement: customer.complement,
                    district: customer.district,
                    city: customer.city,
                    country: customer.country,
                    postalCode: customer.postalCode
                },
                documents: {
                    type: 'CPF',
                    value: customer.cpf
                }
            },
            paymentMethod: {
                type: 'card',
                creditCard: {
                    token: customer.tokenCard,
                    holder: {
                        name: customer.customerCardName,
                        birthDate: customer.customerBirth
                    }
                }
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

module.exports = sign;
