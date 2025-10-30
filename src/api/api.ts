import axios from 'axios';
import type { AxiosResponse } from 'axios';

const api = axios.create({
    baseURL: process.env.NODE_ENV === "production"
        ? "https://miguro-v2.vercel.app"
        : "http://localhost:3001",
})

export default {
    getKanjiList(): Promise<AxiosResponse<any>> {
        return api.get('/fetchKanjiList');
    },
    postAddNewKanjiCharacter(data: any): Promise<AxiosResponse<any>> {
        return api.post('/uploadNewKanjiCharacter', data);
    },
    getSearchDictionary(query: string): Promise<AxiosResponse<any>> {
        return api.get('/searchDictionary', { params: { query }, headers: { 'Cache-Control': 'no-cache' } });
    },
    getQuizQuestions(id: number): Promise<AxiosResponse<any>> {
        return api.get('/fetchQuiz', { params: { id } });
    }
}