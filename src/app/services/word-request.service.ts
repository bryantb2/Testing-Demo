import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class EndpointService {
    private words = [ 
        'stupid word', 
        'less stupid word', 
        'back to a stupid word'
    ]

    public async getAWord(): Promise<string> {
        return new Promise((res, rej) => {
            setTimeout(() => {}, 2000)
                const randomIndx = Math.floor(Math.random() * 3)
                return res(this.words[randomIndx]);
            }
        )
    }

    public async getAFailedWord(): Promise<string> {
        throw new Error('failed word!')
    }
}
