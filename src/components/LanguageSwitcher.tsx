import * as React from "react"

import { setLanguage } from "../i18n"
import * as styles from "./LanguageSwitcher.scss"
import { tc } from "../utils/tc"
import clsx from "clsx"

export const LanguageSwitcher = () => {
	return (
		<div className={tc("flex", "bold", "s4")}>
			<div
				className={clsx(tc("pointer", "grow"), styles.language)}
				onClick={() => {
					void setLanguage("en")
				}}
			>
				English
			</div>
			<div
				className={clsx(tc("pointer", "grow", "textRight"), styles.language)}
				onClick={() => {
					void setLanguage("ja")
				}}
			>
				日本語
			</div>
		</div>
	)
}
