import { clsx } from "clsx"

import * as ts from "../styles/template.scss"

export function tc(...classes: (keyof typeof ts | "" | false)[]): string {
	return clsx(...classes.map(c => c && ts[c]))
}
