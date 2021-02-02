import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'db3',
  connector: 'memory',
  localStorage: '',
  file: ''
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class Db3DataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'db3';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.db3', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
