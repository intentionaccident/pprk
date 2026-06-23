import * as React from "react"
import { Link } from "react-router"

import { DiscordLink } from "./DiscordLink"
import { tc } from "../utils/tc"
import clsx from "clsx"
import * as styles from "./PageFooter.scss"

export const PageFooter = () => {
	return (
		<div className={clsx(tc("flex", "s4", "bold", "pt4", "mt4", "jcenter"), styles.footer)}>
			<div className={clsx(tc("flex", "g0", "jcenter"), styles.content)}>
				<Link to="/">Index</Link>
				<Link to="/faq">FAQ</Link>
				<DiscordLink />
			</div>
		</div>
	)
}
