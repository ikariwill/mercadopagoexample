import { MercadoPagoConfig } from 'mercadopago'
import { v4 as uuidv4 } from 'uuid'

export class Payments {
  public static execute() {
    const options = { timeout: 5000, idempotencyKey: uuidv4() }

    const client = new MercadoPagoConfig({
      accessToken: '',
      options,
    })

   console.log('execute') 
  }
}