import axios from 'axios';
import Quagga from 'quagga';

//import CONFIG from '@/config';
//const API_ROUTE = `${CONFIG.HOSTNAME}/isbn`;
const API_ROUTE = "https://lib-hub.herokuapp.com/api/v1/isbn/";

export async function retrieveBookInfo(ISBN) {
    const response = await axios.get(API_ROUTE + ISBN);
    return response.data;
}


export async function getISBN_from_image(image_path) {
    const isbn = await new Promise((resolve, reject) => {
        Quagga.decodeSingle({
                decoder: {
                    readers: ["code_128_reader", "code_39_reader", "code_39_vin_reader", "ean_reader", "ean_8_reader", "upc_reader", "upc_e_reader", "codabar_reader"], // List of active readers
                },
                locate: true, // try to locate the barcode in the image
                numOfWorkers: 0,
                src: image_path, // or 'data:image/jpg;base64,' + data
            },
            function(result) {
                if (result.codeResult) {
                    resolve(result.codeResult.code)
                } else {
                    reject("not_found");
                }
            }
        );
    })
    return isbn;
}