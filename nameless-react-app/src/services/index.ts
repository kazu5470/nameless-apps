import { FnType, wrapper } from '@/utils/misc';

export function _wrapper<T1, T2, T3, R>(fn: FnType<R, T1, T2, T3>) {
  return wrapper(fn, { __default: null });
}
