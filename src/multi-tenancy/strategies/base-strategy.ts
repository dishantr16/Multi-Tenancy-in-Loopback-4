import {ValueOrPromise} from '@loopback/core';
import {RequestContext} from '@loopback/rest';
import {Tenant} from '../types';

export abstract class BaseStrategy {
  bindResources(
    requestContext: RequestContext,
    tenant: Tenant,
  ): ValueOrPromise<void> {
    requestContext
      .bind('datasources.db')
      .toAlias(`datasources.db.${tenant.id}`);
  }
}
