export enum SocketEvent {
    // basic events
    CONNECT = "connect",
    DISCONNECT = "disconnect",
    ENTER = "enter",
    EXIT = "exit",
    START = "start",
    FINISH = "finish",
    // specific events
    TRANSLATION = "translation",
    NOTIFICATION = "notification",
}

export enum ThemeTypes {
    DARK_THEME = 'DARK',
    LIGHT_THEME = 'LIGHT',
}