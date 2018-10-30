import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

export interface CrossTabMessage {
    message: string;
    data?: any;
}

interface CrossTabSendMessage extends CrossTabMessage{
    ts: Date;
}

@Injectable()
export class CrossTabService {
    private readonly localStorageItemKey = '__crossTabMessage';
    private messages$: Subject<CrossTabMessage>;

    constructor() {
        this.messages$ = new Subject();

        window.addEventListener('storage', (event: StorageEvent) => {
            if (event.key !== this.localStorageItemKey)
                return;

            const msg: CrossTabSendMessage = JSON.parse(event.newValue);
            // Remove the dummy timestamp
            delete msg.ts;
            this.messages$.next(msg);
        });
    }

    /***
     * A messages observable which can be subscribed to
     */
    get messages(): Observable<CrossTabMessage> {
        return this.messages$.asObservable();
    }

    /***
     * Broadcasts a message across the browser tabs
     * @param message The message to broadcast
     * @param includeSelf True if you want to include the current tab, false just broadcast the message to other tabs
     */
    sendMessage(message: CrossTabMessage, includeSelf: boolean = false) {
        if (includeSelf)
            this.messages$.next(message);

        // Add Timestamp so the same message can be sent twice
        // (only changes to the localstorage item are emitted into the eventlistern 'storage')
        (<CrossTabSendMessage>message).ts = new Date();

        localStorage.setItem(this.localStorageItemKey, JSON.stringify(message));
    }
}
