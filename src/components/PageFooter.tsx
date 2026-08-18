import clsx from "clsx"
import * as React from "react"
import { useTranslation } from "react-i18next"
import { Link } from "react-router"

import { tc } from "../utils/tc"
import { DiscordLink } from "./DiscordLink"
import * as styles from "./PageFooter.scss"

export const PageFooter = () => {
	const { t } = useTranslation()
	return (
		<div className={clsx(tc("flex", "s4", "bold", "pt4", "mt4", "jcenter", "nowrap"), styles.footer)}>
			<div className={clsx(tc("flex", "g4", "jcenter"), styles.content)}>
				<Link to="/">{t("nav.index")}</Link>
				<Link to="/faq">{t("nav.faq")}</Link>
				<DiscordLink>{t("nav.discord")}</DiscordLink>
			</div>
		</div>
	)
}
