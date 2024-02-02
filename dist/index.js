"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payments = void 0;
const mercadopago_1 = require("mercadopago");
const uuid_1 = require("uuid");
class Payments {
    static execute() {
        const options = { timeout: 5000, idempotencyKey: (0, uuid_1.v4)() };
        const client = new mercadopago_1.MercadoPagoConfig({
            accessToken: '',
            options,
        });
        console.log('execute');
    }
}
exports.Payments = Payments;
