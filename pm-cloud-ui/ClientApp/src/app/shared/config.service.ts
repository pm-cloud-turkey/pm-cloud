import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";

@Injectable()
export class ConfigService {

    constructor() {}

    get authApiURI() {
        return environment.url.authServicesApi;
    }

    get resourceApiURI() {
        return 'http://localhost:12001/api';
    }
}
