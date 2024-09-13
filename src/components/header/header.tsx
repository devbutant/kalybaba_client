import { updateUserConnectionStatus } from "../../api/services/login";
import { useAppAuth } from "../../hooks/contexts-hooks/auth/app";
import { useMessages } from "../../hooks/messages";
import { useSocket } from "../../hooks/socket";
import { Button } from "../button";

const Header = () => {
    const { setToken, token } = useAppAuth();
    const { disconnectSocket } = useSocket();
    const { stopListeningToMessages } = useMessages();

    const handleLogout = async () => {
        await updateUserConnectionStatus(token, false);
        disconnectSocket();
        stopListeningToMessages();
        localStorage.removeItem("access_token");
        setToken(null);
    };

    return (
        <header className="bg-blue-600 text-white py-4 shadow-md">
            <div className="max-w-screen-xl flex justify-between mx-auto">
                <h1 className="text-center text-3xl font-bold">Yadetout</h1>
                <Button
                    onClick={handleLogout}
                    className="bg-red-500 text-white"
                >
                    Déconnexion
                </Button>
            </div>
        </header>
    );
};

Header.displayName = "Header";

export { Header };
