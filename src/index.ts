import axios from 'axios';

export class Logger {
  private identifier: string;
  private baseUrl: string;

  constructor(identifier: string) {
    this.identifier = identifier;
    this.baseUrl = 'https://cep-console.brianure.com/api/v1';
  }

  async log(message: string): Promise<void> {
    try {
      await axios.post(`${this.baseUrl}/console/log`, {
        identifier: this.identifier,
        log: message
      });
    } catch (error) {
      
    }
  }

  async clear(): Promise<void> {
    try {
      await axios.post(`${this.baseUrl}/console/clear`, {
        identifier: this.identifier
      });
    } catch (error) {
      
    }
  }
}
