import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// TODO: comme indique ci dessous : bouge les dans un fichier JSON et importe les ou mieux encore, gère les séparément de ton code
// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
    en: {
        translation: {
            "Welcome to React": "Welcome to React and react-i18next",
            categoryOrType: {
                TECH_AND_GADGETS: "Tech & Gadgets",
                PRODUCTIVITY: "Productivity",
                GAMING: "Gaming",
                CREATIVE_WORKSPACE: "Creative Workspace",
                STUDY_SPACE: "Study Space",
                HOME_OFFICE: "Home Office",
                DIY_AND_CUSTOM_SETUPS: "DIY & Custom Setups",
                MINIMALIST: "Minimalist",
                COZY_SPACES: "Cozy Spaces",
                COLLABORATIVE_WORKSPACES: "Collaborative Workspaces",
                OTHERS: "Others",

                NEED_ADVICE: "Need Advice",
                SHARED_SETUP: "Setup Shared",
            },
        },
    },
    fr: {
        translation: {
            "Welcome to React": "Bienvenue à React et react-i18next",
            categoryOrType: {
                TECH_AND_GADGETS: "Tech & Gadgets",
                PRODUCTIVITY: "Productivité",
                GAMING: "Jeux",
                CREATIVE_WORKSPACE: "Espace Créatif",
                STUDY_SPACE: "Espace d'Étude",
                HOME_OFFICE: "Bureau à Domicile",
                DIY_AND_CUSTOM_SETUPS: "DIY & Configurations Personnalisées",
                MINIMALIST: "Minimaliste",
                COZY_SPACES: "Espaces Confortables",
                COLLABORATIVE_WORKSPACES: "Espaces de Collaboration",
                OTHERS: "Autres",

                NEED_ADVICE: "Besoin d'avis",
                SHARED_SETUP: "Partage de setup",
            },
        },
    },
};

i18n.use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "fr", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
        // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
        // if you're using a language detector, do not define the lng option

        interpolation: {
            escapeValue: false, // react already safes from xss
        },
    });

export default i18n;
