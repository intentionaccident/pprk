import * as React from "react"
import { useTranslation } from "react-i18next"
import { Outlet } from "react-router"

import { LanguageSwitcher } from "./LanguageSwitcher"
import { PageFooter } from "./PageFooter"
import * as styles from "./PageScaffold.scss"

export const PageScaffold = () => {
	const { t, i18n } = useTranslation()

	React.useEffect(() => {
		document.title = t("pageTitle")
	}, [t, i18n.resolvedLanguage])

	return (
		<div className={styles.root}>
			<LanguageSwitcher />
			<Outlet />
			<PageFooter />
		</div>
	)
}
