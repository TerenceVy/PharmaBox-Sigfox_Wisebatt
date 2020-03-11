import { Message } from './../services/message.interface';
import { Component, OnInit } from '@angular/core';
import { SocketService } from '../services/socket.service';
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'app-distributors',
	templateUrl: './distributors.component.html',
	styleUrls: ['./distributors.component.scss']
})
export class DistributorsComponent implements OnInit {
	ioConnection: any;

	isProcessing = true;

	suffusingQuantity = 5;
	warningQuantity = 3;
	emptyQuantity = 0;

	distributors = [];

	constructor(private socketService: SocketService, private http: HttpClient) {}

	ngOnInit() {
		this.http.get('http://172.16.239.31:4000/distributors').subscribe((data) => {
			this.distributors = data['result'];

			this.initIoConnection();

			setTimeout(() => {
				this.isProcessing = false;
			}, 1000);
		});
	}

	private initIoConnection(): void {
		this.socketService.initSocket();

		this.ioConnection = this.socketService.onMessage().subscribe((message: Message) => {
			console.log(message);
			this.distributors = message['result'];
		});
	}
}
