import { useEffect, useState } from "react";
import { HelmetProvider } from "react-helmet-async";
import { SplashScreen } from "./components/loading";
import { Router } from "./routes";

/**
 * Bare useEffect with no dependencies might work in production,
 * but such an effect would trigger twice in development (react 18+ strict mode)
 *
 * @see https://react.dev/learn/you-might-not-need-an-effect#initializing-the-application
 */

let didInit = false;

const App = () => {
    const [appInitialized, setAppInitialized] = useState(didInit); // convert didInit to a stateful variable for render-logic to use

    // initialization effect
    useEffect(() => {
        if (!didInit) {
            didInit = true;
            setAppInitialized(true);

            // Here, write initialization code.

            /**
       * Example :

      if (import.meta.env.MODE === NODE_ENV.PROD) {
        launchSentry();
       }
      
      */
        }
        // Keep depndency array empty to avoid executing the content above multiple times
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (!appInitialized) {
        return <SplashScreen />;
    } else {
        return (
            <>
                {/* 
          Allows using <Helmet> in children components 
  
          Helmet lets you manage all of your changes to the document head.
        */}
                <HelmetProvider>
                    {/* 
            The actual route renderer.
            Must be wrapped in a <BrowserRouter /> (or equivalent - from main.tsx)
          */}
                    <Router />
                </HelmetProvider>
            </>
        );
    }
};

export default App;
