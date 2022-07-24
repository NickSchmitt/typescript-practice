//this is better because 
// constraint at the beginning gives the error message "must be boolean"
type If<C extends boolean, T, F> = C extends true ? T : F

//this is worse because
//it compiles even if C isn't a boolean which it should be
//its type is just never
type If2<C, T, F> = C extends true ? T : C extends false ? F : never