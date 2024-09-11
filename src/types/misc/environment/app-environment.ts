export type OwnEnv = {
    VITE_API_URL: string;
    /**
     * Non "VITE_"-prefixed variables won't be available at run-time,
     * but can be read before build (in vite.config.ts).
     *
     * @see https://vitejs.dev/config/#using-environment-variables-in-config
     */
    SECRET_NOT_EXPOSED?: string | undefined;
};

export type AppEnv = OwnEnv;
