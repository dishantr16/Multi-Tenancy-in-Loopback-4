import {
  Binding,
  Component,
  createBindingFromClass,
  extensionFor,
} from '@loopback/core';
import {MultiTenancyBindings, MULTI_TENANCY_STRATEGIES} from './keys';
import {MultiTenancyMiddlewareProvider} from './middleware/multi-tenancy-middleware.provider';
import {
  HeaderStrategy,
  HostStrategy,
  JWTStrategy,
  QueryStrategy,
} from './strategies';

export class MultiTenancyComponent implements Component {
  bindings: Binding[] = [
    createBindingFromClass(MultiTenancyMiddlewareProvider, {
      key: MultiTenancyBindings.MIDDLEWARE,
    }),
    createBindingFromClass(JWTStrategy).apply(
      extensionFor(MULTI_TENANCY_STRATEGIES),
    ),
    createBindingFromClass(HeaderStrategy).apply(
      extensionFor(MULTI_TENANCY_STRATEGIES),
    ),
    createBindingFromClass(QueryStrategy).apply(
      extensionFor(MULTI_TENANCY_STRATEGIES),
    ),
    createBindingFromClass(HostStrategy).apply(
      extensionFor(MULTI_TENANCY_STRATEGIES),
    ),
  ];
}
