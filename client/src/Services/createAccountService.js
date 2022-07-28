import axios from 'axios';

const url = '/user';

const createAccount = async payload => {
    try {
        const resp = await axios.post(url, payload)
        return resp
    } catch(err){
        console.log(`Ocurrio un error : ${err}`)
    }
}

export default createAccount