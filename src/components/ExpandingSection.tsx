import clsx from "clsx"
import * as React from "react"

import { tc } from "../utils/tc"
import * as styles from "./ExpandingSection.scss"
export const ExpandingSection = ({ title, children }: { title: string; children: React.ReactNode; }) => {
	const [isExpanded, setIsExpanded] = React.useState(false)
	return <div>
		<div
			className={clsx(tc("s4", "bold", "p8", "pb6", "flex", "g3", "pointer"), styles.title)}
			onClick={() => setIsExpanded(!isExpanded)}
		>
			<div className={tc("grow")}>{title}</div>
			<div>{isExpanded ? "🞁" : "🞃"}</div>
		</div>
		{isExpanded && <div className={tc("p8", "pb6", "s5", "vflex", "g8")}>{children}</div>}
	</div>
}
