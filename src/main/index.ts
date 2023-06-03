import 'reflect-metadata';
import { Application } from './application';
import { initInversifyContainer } from './inversify';

// - Initialize dependencies injection container.
const container = initInversifyContainer();
const app = container.get(Application);
app.init();
