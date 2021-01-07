import { Header } from "https://deno.land/x/djwt@v2.0/mod.ts"

/**
 * @description token key
 */
export const KEY = "secret";

/**
 * @description JWT header
 */
export const JWT_HEADER: Header = { alg: "HS256", typ: "JWT" }
