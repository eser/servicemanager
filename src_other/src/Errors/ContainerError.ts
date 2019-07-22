/**
 * Indicates that an error occurred in the library.
 */
export default class ContainerError extends Error {
  constructor(message: string) {
    super(message);

    // Withouth this, then doing "error instanceof ContainerError" does not work.
    Object.setPrototypeOf(this, ContainerError.prototype);
  }
}
