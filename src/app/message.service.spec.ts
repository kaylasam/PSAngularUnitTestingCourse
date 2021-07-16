import { MessageService } from "./message.service";

describe('MessageService', () => {
    let service: MessageService

    beforeEach(() => {
        
    })

    it('should expect no messages to start', () => {
        service = new MessageService();         // start w a new service in each test

        expect(service.messages.length).toBe(0);
    })

    it('should add a message when add is called', () => {
        service = new MessageService();         // start w a new service in each test

        service.add('message1');

        expect(service.messages.length).toBe(1);
    })

    it('should remove all messages when clear is called', () => {
        service = new MessageService();         // start w a new service in each test

        service.add('message1');
        
        service.clear();

        expect(service.messages.length).toBe(0);
    })
})