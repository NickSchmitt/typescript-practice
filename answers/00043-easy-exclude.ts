// string union (T) extends the narrower string literal (U)
// https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#distributive-conditional-types
type MyExclude<T, U> = T extends U ? never : T