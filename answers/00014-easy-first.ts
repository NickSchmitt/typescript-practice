type First<T extends any[]> = T['length'] extends 0 ? never : T[0]
// alternatively:
// type First<T extends any[]> = T extends [infer first, ...any[]] ? first : never
