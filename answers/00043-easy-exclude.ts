// string union (T) extends the narrower string literal (U)
type MyExclude<T, U> = T extends U ? never : T