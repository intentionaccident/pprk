import * as React from "react"
import { tc } from "../utils/tc"

export const PageHeader = ({ children }: { children: React.ReactNode }) => {
	return <div className={tc("flex", "s1", "bold", "pb2")}>
		<div className={tc("grow", "textCenter")}>{children}</div>
	</div>
}
