import { Image } from "./Image";

export class ImageService {

    baseURL: string = 'http://localhost:8080/images'
     async buscar(): Promise<Image[]> {
        const resposne = await fetch(this.baseURL);
        return await  resposne.json();
    
     }
}
 
export const imageService = () => new ImageService();