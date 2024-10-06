import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Link,
    Preview,
    Tailwind,
    Text,
} from "@react-email/components";

interface NotionMagicLinkEmailProps {
    loginCode?: string;
}

const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "";

export const NotionMagicLinkEmail = ({
    loginCode,
}: NotionMagicLinkEmailProps) => (
    <Tailwind
        config={{
            theme: {
                extend: {
                    colors: {
                        brand: "#007291",
                    },
                    fontFamily: {
                        sans: ['"Helvetica Neue"', "Arial", "sans-serif"],
                    },
                },
            },
        }}
    >
        <Html>
            <Head />
            <Preview>Connectez-vous avec ce lien magique</Preview>
            <Body className="bg-white font-sans">
                <Container className="px-4 mx-auto max-w-lg">
                    <Heading className="text-gray-800 font-bold text-3xl my-8">
                        Confirmez votre adresse e-mail
                    </Heading>
                    <Link
                        href="https://notion.so"
                        target="_blank"
                        className="text-blue-600 underline text-base mb-4"
                    >
                        Cliquez ici pour vous connecter avec ce lien magique
                    </Link>
                    <Text className="text-gray-800 text-base mb-2">
                        Ou, copiez et collez ce code de connexion temporaire :
                    </Text>
                    <code className="inline-block bg-gray-100 border border-gray-300 rounded-md px-4 py-2 text-gray-800 w-full">
                        {loginCode}
                    </code>
                    <Text className="text-gray-500 text-sm mt-3 mb-6">
                        Si vous n&apos;avez pas essayé de vous connecter, vous
                        pouvez ignorer cet e-mail en toute sécurité.
                    </Text>
                    <Text className="text-gray-500 text-sm mt-3 mb-6">
                        Conseil : Vous pouvez définir un mot de passe permanent
                        dans Paramètres & membres → Mon compte.
                    </Text>
                    <Text className="text-gray-600 text-xs leading-5">
                        <Link
                            href={`${baseUrl}/privacy`}
                            target="_blank"
                            className="text-gray-600 underline"
                        >
                            Kalybaba.so
                        </Link>
                        , l'espace de travail tout-en-un
                        <br />
                        pour vos notes, tâches, wikis et bases de données.
                    </Text>
                </Container>
            </Body>
        </Html>
    </Tailwind>
);

NotionMagicLinkEmail.PreviewProps = {
    loginCode: "sparo-ndigo-amurt-secan",
} as NotionMagicLinkEmailProps;

export default NotionMagicLinkEmail;
