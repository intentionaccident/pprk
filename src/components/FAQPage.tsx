import * as React from "react"
import { Trans, useTranslation } from "react-i18next"

import { tc } from "../utils/tc"
import { DiscordLink } from "./DiscordLink"
import { ExpandingSection } from "./ExpandingSection"
import { PageHeader } from "./PageHeader"

export const FAQPage = () => {
	const { t } = useTranslation()
	return <div>
		<PageHeader>{t("faq.title")}</PageHeader>
		<div className={tc("s4", "bold", "p8")}>
			<a
				href="https://tozenunion.org/japanese-law/trade-union-law/"
				target="_blank"
				rel="noopener noreferrer"
			>
				{t("faq.tozenLawLink")}
			</a>
		</div>

		<ExpandingSection title={t("faq.join.title")}>
			<div>
				<Trans
					i18nKey="faq.join.p1"
					components={{
						1: <a href="https://join.tozenunion.org/" target="_blank" rel="noopener noreferrer" />,
					}}
				/>
			</div>
			<div>
				<Trans
					i18nKey="faq.join.p2"
					components={{
						1: <DiscordLink />,
					}}
				/>
			</div>
		</ExpandingSection>

		<ExpandingSection title={t("faq.whatIsUnion.title")}>
			<div>{t("faq.whatIsUnion.p1")}</div>
			<div>{t("faq.whatIsUnion.p2")}</div>
			<div>{t("faq.whatIsUnion.p3")}</div>
		</ExpandingSection>

		<ExpandingSection title={t("faq.goals.title")}>
			<div>{t("faq.goals.p1")}</div>
			<div>{t("faq.goals.p2")}</div>
			<div>{t("faq.goals.p3")}</div>
		</ExpandingSection>

		<ExpandingSection title={t("faq.demands.title")}>
			<div>{t("faq.demands.p1")}</div>
			<div>{t("faq.demands.p2")}</div>
		</ExpandingSection>

		<ExpandingSection title={t("faq.push.title")}>
			<div>{t("faq.push.p1")}</div>
			<div>{t("faq.push.p2")}</div>
			<div>{t("faq.push.p3")}</div>
			<div>{t("faq.push.p4")}</div>
		</ExpandingSection>

		<ExpandingSection title={t("faq.punish.title")}>
			<div>{t("faq.punish.p1")}</div>
			<div>{t("faq.punish.p2")}</div>
			<div>
				<Trans
					i18nKey="faq.punish.p3"
					components={{
						1: <a href="https://tozenunion.org/tozen-reaches-deal-with-shane-over-union-busting-wages/" target="_blank" rel="noopener noreferrer" />,
					}}
				/>
			</div>
			<div>{t("faq.punish.p4")}</div>
		</ExpandingSection>

		<ExpandingSection title={t("faq.required.title")}>
			<div>{t("faq.required.p1")}</div>
			<div>{t("faq.required.p2")}</div>
			<div>{t("faq.required.p3")}</div>
			<div>{t("faq.required.p4")}</div>
		</ExpandingSection>

		<ExpandingSection title={t("faq.tozen.title")}>
			<div>
				<Trans
					i18nKey="faq.tozen.p1"
					components={{
						1: <a href="https://tozenunion.org/about/" target="_blank" rel="noopener noreferrer" />,
					}}
				/>
			</div>
			<div>{t("faq.tozen.p2")}</div>
			<div>{t("faq.tozen.p3")}</div>
			<div>{t("faq.tozen.p4")}</div>
		</ExpandingSection>

		<ExpandingSection title={t("faq.whyTozen.title")}>
			<div>{t("faq.whyTozen.intro")}</div>
			<ul>
				<li>{t("faq.whyTozen.li1")}</li>
				<li>{t("faq.whyTozen.li2")}</li>
				<li>{t("faq.whyTozen.li3")}</li>
				<li>{t("faq.whyTozen.li4")}</li>
			</ul>
			<div>{t("faq.whyTozen.p1")}</div>
			<div>{t("faq.whyTozen.p2")}</div>
		</ExpandingSection>

		<ExpandingSection title={t("faq.after.title")}>
			<div>{t("faq.after.p1")}</div>
			<div>{t("faq.after.intro")}</div>
			<ul>
				<li>{t("faq.after.li1")}</li>
				<li>{t("faq.after.li2")}</li>
				<li>{t("faq.after.li3")}</li>
			</ul>
			<div>{t("faq.after.p2")}</div>
			<div>{t("faq.after.p3")}</div>
		</ExpandingSection>

		<ExpandingSection title={t("faq.run.title")}>
			<div>{t("faq.run.p1")}</div>
			<div>
				{t("faq.run.officersIntro")}
				<ul>
					<li>{t("faq.run.li1")}</li>
					<li>{t("faq.run.li2")}</li>
					<li>{t("faq.run.li3")}</li>
				</ul>
			</div>
			<div>{t("faq.run.p2")}</div>
			<div>{t("faq.run.p3")}</div>
		</ExpandingSection>

		<ExpandingSection title={t("faq.dues.title")}>
			<div>{t("faq.dues.p1")}</div>
			<div>{t("faq.dues.p2")}</div>
			<div>{t("faq.dues.p3")}</div>
			<div>{t("faq.dues.p4")}</div>
			<div>{t("faq.dues.p5")}</div>
			<div>{t("faq.dues.p6")}</div>
		</ExpandingSection>

		<ExpandingSection title={t("faq.expensive.title")}>
			<div>{t("faq.expensive.p1")}</div>
			<div>{t("faq.expensive.p2")}</div>
			<div>{t("faq.expensive.p3")}</div>
			<div>{t("faq.expensive.p4")}</div>
			<div>{t("faq.expensive.p5")}</div>
		</ExpandingSection>
	</div>
}
