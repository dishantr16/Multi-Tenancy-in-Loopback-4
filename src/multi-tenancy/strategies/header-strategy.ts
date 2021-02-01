import {RequestContext} from '@loopback/rest';
import debugFactory from 'debug';
import {MultiTenancyStrategy} from '../types';
import {BaseStrategy} from './base-strategy';

const debug = debugFactory('loopback:multi-tenancy:strategy:header');
/**
 * Use `x-tenant-id` http header to identify the tenant id
 */
export class HeaderStrategy
  extends BaseStrategy
  implements MultiTenancyStrategy {
  name = 'header';

  identifyTenant(requestContext: RequestContext) {
    const tenantId = requestContext.request.headers['x-tenant-id'] as string;
    debug('x-tenant-id', tenantId);
    return tenantId == null ? undefined : {id: tenantId};
  }
}
