import { Injectable } from '@angular/core';

@Injectable()
export class ContentService {
  public getContent(id: string): any {
    // const content = require('./collections/content.json');
    const content = [];
    return content.find((item: any) => id === item.contentId);
  }
}
