import { createServiceFactory, mockProvider, SpectatorService } from "@ngneat/spectator/jest";
import { EndpointService } from "./word-request.service"

describe('Word Request Service', () => {
    let spectator: SpectatorService<EndpointService>;
    const createService = createServiceFactory({
        service: EndpointService
    })

    beforeEach(() => {
        spectator = createService();
    })

    it('Gets a Word', async () => {
        const { service } = spectator;

        const word = await service.getAWord();
        expect(word).toBeTruthy();
    })

    it('Errors Getting a Word', async () => {{
        const { service } = spectator;
        // use promise syntax
        await expect(service.getAFailedWord()).rejects.toThrowError()
    }})
})
