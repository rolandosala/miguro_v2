import axios from 'axios';
import type { AxiosResponse } from 'axios';

const api = axios.create({
    baseURL: `http://${window.location.hostname}:3001`
})

export default {
    getKanjiList(): Promise<AxiosResponse<any>> {
        return api.get('/fetchKanjiList');
    },
    postAddNewKanjiCharacter(data: any): Promise<AxiosResponse<any>> {
        return api.post('/uploadNewKanjiCharacter', data);
    }
}