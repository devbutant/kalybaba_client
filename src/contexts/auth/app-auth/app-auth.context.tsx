import createAxiosInstance from "@/config/axios/axiosConfig";
import { AppAuthContextType, User } from "@/types/contexts";
import { useQuery } from "@tanstack/react-query";
import { createContext, FC, ReactNode, useEffect, useState } from "react";

export const AppAuthContext = createContext<AppAuthContextType | undefined>(
    undefined
);

export const AppAuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState<string | null>(null); // Pas besoin de localStorage

    const axiosInstance = createAxiosInstance();

    const checkAuth = async () => {
        const { data } = await axiosInstance.get("/auth/check"); // Endpoint pour vérifier l'auth
        console.log(data);
        console.log("hello");

        return data;
    };

    const { data: userData, isSuccess } = useQuery({
        queryKey: ["auth"],
        queryFn: checkAuth,
        enabled: !!user,
    });

    useEffect(() => {
        if (isSuccess && userData) {
            setUser({
                isAuthenticated: true,
                userId: userData.id,
                roles: userData.roles,
            });
        } else {
            setUser(null);
        }
    }, [isSuccess, userData]);

    return (
        <AppAuthContext.Provider
            value={{
                token,
                setToken,
                user,
            }}
        >
            {children}
        </AppAuthContext.Provider>
    );
};
// export const AppAuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
//     const [user, setUser] = useState<User | null>(null);
//     const [token, setToken] = useState<string | null>(
//         localStorage.getItem("access_token")
//     );

//     const handleTokenUpdate = (token: string | null) => {
//         setToken(token);
//         if (token) {
//             localStorage.setItem("access_token", token);
//         } else {
//             localStorage.removeItem("access_token");
//         }
//     };

//     useEffect(() => {
//         if (!token) {
//             setUser(null);
//             return;
//         }

//         const decodedToken = jwtDecode<DecodedToken>(token);

//         setUser({
//             isAuthenticated: true,
//             token,
//             userId: decodedToken.id,
//             role: decodedToken.role,
//         });

//         handleTokenUpdate(token);
//     }, [token]);

//     return (
//         <AppAuthContext.Provider
//             value={{
//                 token,
//                 setToken,
//                 user,
//             }}
//         >
//             {children}
//         </AppAuthContext.Provider>
//     );
// };
