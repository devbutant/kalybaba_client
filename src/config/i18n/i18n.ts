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
            selectOptions: {
                VEHICLE: "Vehicle",
                REAL_ESTATE: "Real Estate",
                MULTIMEDIA: "Multimedia",
                HOME: "Home",
                LEISURE: "Leisure",
                FASHION: "Fashion",
                CHILDREN: "Children",
                ANIMALS: "Animals",
                SERVICES: "Services",
                EMPLOYMENT: "Employment",
                OTHERS: "Others",

                OFFER: "Offer",
                DEMAND: "Demand",
            },
        },
    },
    fr: {
        translation: {
            "Welcome to React": "Bienvenue à React et react-i18next",
            selectOptions: {
                VEHICLE: "Véhicule",
                REAL_ESTATE: "Immobilier",
                MULTIMEDIA: "Multimédia",
                HOME: "Maison",
                LEISURE: "Loisirs",
                FASHION: "Mode",
                CHILDREN: "Enfants",
                ANIMALS: "Animaux",
                SERVICES: "Services",
                EMPLOYMENT: "Emploi",
                OTHERS: "Autres",

                OFFER: "Offre",
                DEMAND: "Demande",
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
