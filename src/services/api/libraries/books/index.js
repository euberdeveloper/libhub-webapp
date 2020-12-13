import axios from 'axios';

//import CONFIG from '@/config';

//const API_ROUTE = `${CONFIG.HOSTNAME}/libraries`;
const API_ROUTE = "https://lib-hub.herokuapp.com/api/v1/libraries";

export async function getBooks(lid) {
    //console.log("Api lid: "+lid);
    const response = await axios.get(API_ROUTE + "/" + lid + "/books");
    return response.data;
}

export async function retrieveBookInfo(ISBN) {
    const response = await axios.get("https://lib-hub.herokuapp.com/api/v1/isbn/" + ISBN);
    return response.data;
}


export function getISBN_from_image(image_path) {
    let Quagga = require('quagga').default
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
                this.$store.commit('setIsbnObatinedFromImage', result.codeResult.cod)
            } else {
                this.$store.commit('setIsbnObatinedFromImage', '')
            }
        }
    );

}

export async function postLibrariesLidBooks(lid, body){
    const response = await axios.post(API_ROUTE+"/"+lid+"/books", body);
    return response.data;
}

export async function deleteLibrariesLidBooksBid(lid, bid) {
    await axios.delete(API_ROUTE+"/"+lid+"/books/"+bid);
}