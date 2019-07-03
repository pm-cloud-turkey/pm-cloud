import * as signalR from "@aspnet/signalr";


export class SignalRService {

    public data: any[];

    private hubConnection: signalR.HubConnection;

    public startConnection = (url: string, loginToken:string) => {
        this.hubConnection = new signalR.HubConnectionBuilder()
            .configureLogging(signalR.LogLevel.Debug)
            .withUrl(url, {
                skipNegotiation: true,
                transport: signalR.HttpTransportType.WebSockets,
                accessTokenFactory: () => loginToken
            })
            .build();

        this.hubConnection
            .start()
            .then(() => console.log('Connection started'))
            .catch(err => console.log('Error while starting connection: ' + err));
    };

    public addTransferChartDataListener = (methodName: string) => {
        this.hubConnection.on(methodName, (data) => {
            this.data = data;
            //console.log(data);
        });
    }
}
