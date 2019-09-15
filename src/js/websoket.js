export default class WebSocketHandler {
    static eventSocketURL() {
        return `${process.env.VUE_APP_WS_TYPE}://${process.env.VUE_APP_API_HOST}:${
            process.env.VUE_APP_WS_PORT
        }/vote`;
    }

    constructor(store) {
        this.store = store;
        this.websocket = null;

        this.url = null;
        this.retriesAvailable = 3;
    }

    connect(url) {
        if (this.websocket) {
            this.disconnect();
        }

        this.websocket = new WebSocket(url);
        this.url = url;

        this._initEvents();

    }

    send(message){
        message  = JSON.stringify(message);
        if (this.websocket.readyState === 0)
            this.reSend(message);
        else this.websocket.send(message)
    }

    reSend(message){
        setTimeout(()=>{
            if (this.websocket.readyState !== 0) {
                this.websocket.send(message);
            }
            else this.reSend(message)
        },10)
    }

    checkConnection({ eventId, url }) {
        if (!eventId && !url && !this.websocket) {
            return;
        }

        if (
            !eventId &&
            !url &&
            this.websocket &&
            this.websocket.readyState === 3
        ) {
            this.reconnect();
            return;
        }

        let socketUrl = null;

        if (eventId) {
            socketUrl = WebSocketHandler.eventSocketURL(eventId);
        } else if (url) {
            socketUrl = url;
        }

        if (this.url === socketUrl) {
            if (this.websocket.readyState === 3) {
                this.reconnect();
            }
            return;
        }

        this.connect(socketUrl);
    }

    reconnect() {
        if (this.retriesAvailable) {
            setTimeout(() => {
                this.connect(this.websocket.url);
                this.retriesAvailable--;
            }, 2000);
        }
    }

    disconnect() {
        if (this.websocket) {
            this.websocket.close();
        }
        this.websocket = null;
        this.url = null;
    }

    _initEvents() {
        this.websocket.addEventListener("open", this._onOpen.bind(this));
        this.websocket.addEventListener("close", this._onClose.bind(this));
        this.websocket.addEventListener("error", this._onError.bind(this));
        this.websocket.addEventListener("message", this._onMessage.bind(this));
    }

    _onOpen(event) {
        console.log(event);
        this.retriesAvailable = 3;
    }

    _onClose(event) {
        console.log(event);

        if (event.code !== 1000) this.reconnect();
    }

    _onError(error) {
        console.log(error);
        //this.store.commit("SOCKET_ERRORED", { error });
    }

    _onMessage(event) {
        const data = JSON.parse(event.data);
        this.store.dispatch(`SOCKET_${data.type}`, { data });
    }
}
