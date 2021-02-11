import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class ClientService {

    private URLs = {
        clientInfoAPI: (client) => {
            return `https://run.mocky.io/v3/${client}`;
        }
    };

    constructor(private http: HttpClient) { }

    public getClientConfig(client) {
        return this.http.get(this.URLs.clientInfoAPI(client));
    }
}