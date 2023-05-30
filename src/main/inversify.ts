import { Container } from 'inversify';
import { SettingsService } from './services/settings.service';

export function initInversifyContainer(): Container {
  const container = new Container();
  container.bind(SettingsService).toSelf();

  return container;
}
