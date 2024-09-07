import { AppAuthContextType } from "./app-auth.context.type";
import { SocketAuthContextType } from "./socket-auth.context.type";

export interface CombinedAuthContextType {
    socketAuth: SocketAuthContextType;
    appAuth: AppAuthContextType;
}
