import * as React from "react"
import { DiscordLink } from "./DiscordLink"
import { tc } from "../utils/tc"
import * as colors from "../styles/colors.scss"
import * as styles from "./IndexPage.scss"
import clsx from "clsx"
import { Trans, useTranslation } from "react-i18next"
import { Link } from "react-router"

export const IndexPage = () => {
	const { t } = useTranslation()
	return <div className={tc("textCenter", "vflex", "center", "g6", "stretch")}>
		<div className={tc("s2", "bold")}>{t("index.attack.title")}</div>
		<div className={tc("s4")}>{t("index.attack.body")}</div>

		<div className={clsx(tc("s4", "bold"), colors.textAlert)}>
			<div>{t("index.attack.detail.week")}</div>
			<div>{t("index.attack.detail.month")}</div>
		</div>

		<div className={tc("s4")}>
			<Trans
				i18nKey="index.attack.alert"
				components={{
					1: <span className={clsx(tc("s4", "bold"), colors.textAlert)} />,
				}}
			/>
		</div>

		<div className={clsx(styles.separator, tc("my5")) }/>

		<div className={tc("s2", "bold")}>{t("index.form.title")}</div>
		<div className={tc("s3", "bold")}>{t("index.form.body")}</div>
		<div className={tc("s3", "bold")}>{t("index.form.insurance")}</div>
		<div className={tc("s4")}>
			<Trans
				i18nKey="index.form.fight"
				components={{
					1: <span className={clsx(tc("s4", "bold"), colors.textBold)} />,
				}}
			/>
		</div>

		<div className={clsx(styles.separator, tc("my5")) }/>

		<div className={tc("s2", "bold")}>{t("index.form.stand")}</div>
		<div className={tc("s3", "bold")}>{t("index.form.join")}</div>

		<div className={tc("s3", "bold")}><Link to="/faq">{t("index.form.faq")}</Link></div>
		<div className={tc("s2", "bold")}><DiscordLink>{t("index.form.discord")}</DiscordLink></div>
		<div className={tc("s3", "bold")}>{t("index.form.form")}</div>
		<div  className={tc("s3", "bold")}>
			<a href="https://docs.google.com/forms/d/e/1FAIpQLSfZRPAtcrr7Zh62htkdE8pOpNXXazpfZ8FDXM-1m0bofTX9sQ/viewform?usp=dialog">
				{t("index.form.please")}
			</a>
		</div>
	</div>
}
