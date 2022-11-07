import { start } from "repl"
import { create, Whatsapp, Message, SocketState } from "venom-bot"

class Sender{
    private client: Whatsapp

    constructor(){
        this.initialize()
    }
    
    private initialize(){
        const qr = (base64Qrimg: string, asciiQR: String) => {
            console.log(asciiQR);
        }

        const start = (client: Whatsapp) => {
            this.client = client
        }

        create('sender-temp', qr)
        .then((client) => start(client))
        .catch((error) => console.error(error))
    }
}
export default Sender