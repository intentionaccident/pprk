import * as React from "react"
import { Outlet } from "react-router"

import { PageFooter } from "./PageFooter"
import * as styles from "./PageScaffold.scss"

export const PageScaffold = () => {
	return (
		<div className={styles.root}>
			<Outlet />
			<PageFooter />
		</div>
	)
}