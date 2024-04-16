import { Injectable } from '@angular/core';
import OpenAI from 'openai';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OpenaiService {

  private openaiInstance: any;

  constructor() {
    this.openaiInstance = new OpenAI({
      apiKey:environment.dallkey,
      dangerouslyAllowBrowser:true,
    });
  }

  generateImage(description: string): Promise<string> {
    return new Promise((resolve, reject) => {
      this.openaiInstance.images.generate({
        model: 'dall-e-2',
        prompt: description,
      }).then((response: any) => {
        const generatedImage = response.data.choices[0].text.trim();
        resolve(generatedImage);
      }).catch((error: any) => {
        reject(error);
      });
    });
  }
}
