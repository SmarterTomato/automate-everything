import ElectronStore from 'electron-store';
import { Container, ContainerModule } from 'inversify';
import { Application } from './application';
import { SettingsService } from './services/settings.service';

export const electronStoreModule = new ContainerModule((bind) => {
  bind(ElectronStore).toConstantValue(new ElectronStore());
});

export function initInversifyContainer(): Container {
  const container = new Container();

  container.load(electronStoreModule);
  container.bind(SettingsService).toSelf();
  container.bind(Application).toSelf();

  return container;
}
