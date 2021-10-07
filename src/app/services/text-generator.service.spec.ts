import { EndpointService } from './word-request.service';
import { createServiceFactory, mockProvider, SpectatorService } from "@ngneat/spectator/jest";
import { TextGeneratorService } from "./text-generator.service"

describe('Text Generator Service - Auto Mock', () => {
    let spectator: SpectatorService<TextGeneratorService>;
    const createService = createServiceFactory({
        service: TextGeneratorService,
        mocks: [EndpointService]
    })

    beforeEach(() => {
        spectator = createService();
    })

    it('Calls generate word endpoint', async () => {
        const { service } = spectator;
        const endpointService = spectator.inject(EndpointService);

        await service.generateAWord()
        expect(endpointService.getAWord).toHaveBeenCalled(); // notice this!
    })
})

describe('Text Generator Service', () => {
    const testPayload = 'test word';

    let spectator: SpectatorService<TextGeneratorService>;
    const createService = createServiceFactory({
        service: TextGeneratorService,
        providers: [
            mockProvider(EndpointService, {
                getAWord: async () => testPayload
            })
        ]
    })

    beforeEach(() => {
        spectator = createService();
    })

    it('Calls generate word endpoint', async () => {
        const { service } = spectator;
        const endpointService = spectator.inject(EndpointService);

        const response = await service.generateAWord()
        expect(response).toEqual(testPayload)
    })
})
