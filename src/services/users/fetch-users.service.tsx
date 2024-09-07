import axios from "axios";
import { UserDto } from "../../types/dtos";

export const fetchUsers = async (token: string | null): Promise<UserDto[]> => {
    const { data } = await axios.get("http://localhost:3001/users", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return data;
};
