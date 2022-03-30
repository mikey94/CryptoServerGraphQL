import { RESTDataSource } from "apollo-datasource-rest";

export class CryptoApi extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://api.coincap.io/v2/';
    }

    async getCryptoAssets() {
        return this.get(`${this.baseURL}assets`);
    }

    async getCryptoAsset(type) {
        return this.get(`${this.baseURL}assets/${type}`);
    }

    async getCryptoHistory(type,interval = 'm5') {
        return this.get(`${this.baseURL}assets/${type}/history?interval=${interval}`)
    }
}
