/**
 * Lifetime type.
 */
export type LifetimeType =
  | 'SINGLETON'
  | 'TRANSIENT'
  | 'SCOPED'
  | 'ANCESTRAL'

/**
 * Lifetime types.
 */
export const Lifetime: Record<LifetimeType, LifetimeType> = {
  /**
   * The registration will be resolved once and only once, in the root container.
   * @type {String}
   */
  SINGLETON: 'SINGLETON',

  /**
   * The registration will be resolved every time (never cached).
   * @type {String}
   */
  TRANSIENT: 'TRANSIENT',

  /**
   * The registration will be resolved once per scope.
   * @type {String}
   */
  SCOPED: 'SCOPED',

  /**
   * The registration will be resolved once and only once, in the container that it was registered in.
   * @type {String}
   */
  ANCESTRAL: 'ANCESTRAL',
}
