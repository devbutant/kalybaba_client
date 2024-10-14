export interface LoginResponseDto {
    access_token: string;
    user: {
        id: string;
        email: string;
        roles: string[] | null;
        isAuthenticated: boolean;
    };
}
