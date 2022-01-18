import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';
import {environment} from '../environment/environment';

const config = {
  name: 'confedata',
  connector: 'mongodb',
  url: environment.connectionStr,
  host: '',
  port: 0,
  user: '',
  password: '',
  database: '',
  useNewUrlParser: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class ConfedataDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'confedata';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.confedata', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}


