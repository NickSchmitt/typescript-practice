//taken from type-challenges repo
type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false

//Check if U is included in tuple T
type Includes<Tuple extends readonly any[], U> =
	// If T tuple has any contents to check, T extends [infer Head, ...infer Tail]
	// If not, then we've reached the end of the tuple without finding a value with a type equal to type U
	// So we can conclude false
	Tuple extends [infer Head, ...infer Tail] 
		// If so, compare the Head and U and check for equality with extends true
		? Equal<U, Head> extends true 
			? true 
			// If not, continue recursing with the Tail
			: Includes<Tail, U> 
		: false