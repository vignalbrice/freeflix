import { Config } from "./config";


const getProductionConfig = (): Config => ({
    production: true,
    api: {
        baseUrl: import.meta.env.VITE_API_URL,
        imageUrl: import.meta.env.VITE_API_IMAGE_URL,
        secret: import.meta.env.VITE_API_SECRET,
        version: 1.0
    },
});

export default getProductionConfig;