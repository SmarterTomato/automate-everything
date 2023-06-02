import { Container, ContainerModule } from 'inversify';
import { SettingsService } from './services/settings.service';
import ElectronStore from 'electron-store';

export const electronStoreModule = new ContainerModule((bind) => {
  bind(ElectronStore).toConstantValue(new ElectronStore());
});

export function initInversifyContainer(): Container {
  const container = new Container();
  container.load(electronStoreModule);
  container.bind(SettingsService).toSelf();
  return container;
}
