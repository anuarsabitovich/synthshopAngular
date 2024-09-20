import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
@Injectable({
  providedIn: 'root',
})
export class CorrelationIdService {
  private correlationId: string = '';
  constructor() {
    this.correlationId = uuidv4();
    console.log(this.correlationId);
  }

  getCorrelationId(): string {
    return this.correlationId;
  }
}
