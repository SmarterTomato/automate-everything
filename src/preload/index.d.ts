import { ElectronAPI } from '@electron-toolkit/preload';
import { CustomApi } from './custom-api.model';

declare global {
  interface Window {
    electron: ElectronAPI;
    api: CustomApi;
  }
}
