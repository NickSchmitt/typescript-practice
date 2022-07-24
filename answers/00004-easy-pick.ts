/**
 * Can't do [P in K]: T[K]
 * Because then we the return type for every prop would be string | boolean
 * since we're saying T[K] could be any of the union in K, we need to narrow it to P, which is an
 * individual property
 * as opposed to either string or boolean depending on the key
 */
 type MyPick<T, K extends keyof T> = { [P in K]: T[P] }