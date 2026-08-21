import { Image } from "./image";

class ImageService {
    baseURL: string = ''
     async buscar(): Promise<Image[]> {
        const resposne = await fetch(this.baseURL);
        return await  resposne.json();
    
     }
}
 
export const useImage = () => new ImageService();