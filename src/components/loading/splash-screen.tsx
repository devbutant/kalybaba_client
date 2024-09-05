import React from "react";

/**
 * Intended to be shown full-screen when content is being loaded.
 *
 * Keep in mind this screen might be shown during app-initialization,
 * and not be part of your usual rendering contexts.
 *
 * As such, avoid using :
 *  - toasts or snackbars
 *  - translations
 *  - state-managed objects
 */
export const SplashScreen = () => {
    return (
        <div className="h-full w-full flex flex-col gap-xxl items-center justify-center bg-bluegrey-25">
            <h1> Chargement...</h1>
            {/* Prefer rendering animations and images */}
        </div>
    );
};
