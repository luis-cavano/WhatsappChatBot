import parsePhoneNumber, {isValidPhoneNumber} from "libphonenumber-js"
import { PhoneNumber } from "libphonenumber-js"
import { start } from "repl"
import { create, Whatsapp, Message, SocketState } from "venom-bot"

class Sender{
    private client: Whatsapp

    constructor(){
        this.initialize()
    }
    
    async sendText(to: string, body: string){
        if(!isValidPhoneNumber(to, 'BR')){
            throw new Error('this number is not valid !!')
        }

        let phoneNumber = parsePhoneNumber(to, 'BR')
          ?.format('E.164')
          ?.replace('+','') as string
          phoneNumber = phoneNumber+('@c.us') 

        await this.client.sendText(phoneNumber, body)
    }

    private initialize(){
        const qr = (base64Qrimg: string, asciiQR: string) => {
            console.log(asciiQR);
        }

        const start = (client: Whatsapp) => {
            this.client = client;
        }

        create('sender-temp', qr)
        .then((client) => start(client))
        .catch((error) => console.error(error))
    }
}
export default Sender