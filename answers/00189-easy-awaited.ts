// If T is a Promise, recursively check its internal value
// until we reach a non-promise type, then return it
type MyAwaited<T> = T extends Promise<infer U> ? MyAwaited<U> : T