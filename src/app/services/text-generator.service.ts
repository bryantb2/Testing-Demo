import { Injectable } from "@angular/core";
import { EndpointService } from "./word-request.service";

@Injectable({
    providedIn: 'root'
})
export class TextGeneratorService {
    constructor(private endpointService: EndpointService) {}

    public async generateAWord(): Promise<string> {
        return await this.endpointService.getAWord()
    }
}
