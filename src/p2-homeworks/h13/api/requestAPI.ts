import axios from "axios";


export const RequestAPI= {
    createRequest(checked:boolean){
      return axios.post('https://neko-cafe-back.herokuapp.com/auth/test', {success:checked})
    }
}