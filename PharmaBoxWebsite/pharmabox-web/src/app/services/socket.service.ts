import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

import * as socketIo from 'socket.io-client';

import { Message } from './message.interface';

const SERVER_URL = 'http://172.16.239.31:4000';

@Injectable()
export class SocketService {
	private socket;

	public initSocket(): void {
		this.socket = socketIo(SERVER_URL);
	}

	public onMessage(): Observable<Message> {
		return new Observable<Message>((observer) => {
			this.socket.on('product', (data: Message) => observer.next(data));
		});
	}
}
