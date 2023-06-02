import { MainConstants } from '@main/main-constants';
import { Settings, UserData } from '@shared/models/settings';
import ElectronStore from 'electron-store';
import { inject, injectable } from 'inversify';

@injectable()
export class SettingsService {
  constructor(
    @inject(ElectronStore)
    private store: ElectronStore
  ) {}

  getSettings(): Settings {
    return this.get(MainConstants.Settings) as Settings;
  }

  setSettings(settings: Settings): void {
    this.set(MainConstants.Settings, settings);
  }

  getUserData(): UserData {
    return this.get(MainConstants.Settings) as UserData;
  }

  setUserData(userData: UserData): void {
    this.set(MainConstants.Settings, userData);
  }

  private get(key: string): Settings {
    return this.store.get(key) as Settings;
  }

  private set(key: string, value: unknown): unknown {
    return this.set(key, value);
  }
}
