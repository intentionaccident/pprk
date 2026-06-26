import * as React from "react"

import { tc } from "../utils/tc"
import { DiscordLink } from "./DiscordLink"
import { ExpandingSection } from "./ExpandingSection"
import { PageHeader } from "./PageHeader"

export const FAQPage = () => {
	return <div>
		<PageHeader>FAQ</PageHeader>
		<div className={tc("s4", "bold", "p8")}>
			<a
				href="https://tozenunion.org/japanese-law/trade-union-law/"
				target="_blank"
				rel="noopener noreferrer"
			>
				Tozen Union FAQ on Japanese Trade Union Law
			</a>
		</div>
		<ExpandingSection title="What is a workers' union?">
			<div>A workers&apos; union is a group of workers who organize together to improve and protect their working conditions.</div>
			<div>When management makes decisions that affect our work, individual employees often have limited power to respond. A union gives workers a way to raise concerns collectively, negotiate with management, and support each other.</div>
			<div>Workers&apos; unions are recognized under Japanese law, and workers are legally protected when joining a union or taking part in legitimate union activity. Employers cannot target, harass, or disadvantage workers for being part of a union.</div>
		</ExpandingSection>

		<ExpandingSection title="What are the main goals of the PayPay Workers Union?">
			<div>Our founding issue is opposition to mandatory office attendance.</div>
			<div>Our first objective is to enter collective bargaining with PayPay to prevent further expansion of mandatory office attendance and push for it to be reversed.</div>
			<div>Over the long term, our goal is to protect the working conditions and rights of all PayPay employees.</div>
		</ExpandingSection>

		<ExpandingSection title="How will we decide what to demand?">
			<div>Our union is democratic. Members will discuss the available options and vote before we make formal demands to the company.</div>
			<div>For example, on office attendance, members may decide whether to seek reversal, prevent further expansion, negotiate exceptions, or pursue another course of action.</div>
		</ExpandingSection>

		<ExpandingSection title="How can the union push for changes to workplace policy?">
			<div>The first step is collective bargaining. After members agree on our demands, the union can formally request negotiations with PayPay and present our case.</div>
			<div>As a union, we are not just asking as isolated individuals. Japanese labor law gives unions the right to bargain collectively, and employers cannot refuse collective bargaining without a justifiable reason.</div>
			<div>Our goal is to resolve issues through negotiation. If negotiation does not lead to progress, members can discuss and vote on further lawful action. This could include industrial action such as strikes, demonstrations, or other collective action, but any such step would be decided democratically by members.</div>
		</ExpandingSection>

		<ExpandingSection title="Can the company punish or fire me for joining the union?">
			<div>Employers cannot lawfully fire, threaten, harass, or otherwise disadvantage workers because they joined a union, tried to organize one, or took part in legitimate union activity. These protections are part of Japan&apos;s Labor Union Act.</div>
			<div>That does not mean retaliation is impossible, but it means members do not have to face it alone. If management pressures union members or treats them differently, the union can help document what happened, respond collectively, and seek support from Tozen Union and legal advisers.</div>
			<div>Joining a union means acting with others, not standing alone. Members decide major actions democratically, and when the union acts, it does so collectively so that responsibility and risk are shared.</div>
		</ExpandingSection>

		<ExpandingSection title="How can I join the union?">
			<div>Right now we are gathering our members on our <DiscordLink>Discord server</DiscordLink></div>
			<div>Members will need to register with <a href="https://join.tozenunion.org/" target="_blank" rel="noopener noreferrer">Tozen Union</a></div>
			<div>We will be holding our founding meeting soon, but you can join the union at any time.</div>
		</ExpandingSection>

		<ExpandingSection title="What will be required of me as a member?">
			<div>All members join Tozen Union and pay monthly dues of 2000 yen. These dues are Tozen-wide funds, not a PayPay-only fee. They support the union&apos;s common work across its locals, including organizers, case support, administration, legal and organizing work, communications, and other activities approved through Tozen&apos;s democratic budget process.</div>
			<div>As members of the PayPay local, we will also take part in decisions about our own workplace. That means joining local meetings when possible, discussing issues together, voting on demands and actions, and choosing representatives when needed.</div>
			<div>PayPay local members may also decide democratically to collect additional local dues if we need to fund PayPay-specific activities.</div>
			<div>PayPay local members also have a voice in Tozen-wide decisions through delegates chosen from the local. The details are set by Tozen&apos;s constitution, but the basic idea is that our local branch participates in both workplace decisions and the wider union&apos;s democratic structure.</div>
		</ExpandingSection>

		<ExpandingSection title="What is Tozen Union?">
			<div><a href="https://tozenunion.org/about/" target="_blank" rel="noopener noreferrer">Tozen Union</a>, officially Zenkoku Ippan Tokyo General Union, is a Tokyo-based general workers&apos; union active since 2009.</div>
			<div>It organizes workers across different companies, industries, and nationalities, with a membership that includes many international workers in Japan. The union operates in both English and Japanese, making it accessible to workers who may not be comfortable navigating workplace issues in Japanese alone.</div>
			<div>Tozen includes locals across education, media, technology, and other workplaces, including Apple Japan and Japan Times.</div>
			<div>PayPay Workers Union would be a local union within Tozen Union. That means PayPay members would organize around our own workplace while also being part of Tozen&apos;s wider union structure.</div>
		</ExpandingSection>

		<ExpandingSection title="Why is PayPay Union going to be part of Tozen Union?">
			<div>Tozen Union has:</div>
			<ul>
				<li>Almost 20 years&apos; experience with collective bargaining and industrial action</li>
				<li>Experience resolving conflicts between international workers and Japanese companies</li>
				<li>English and Japanese are used as the primary languages of the union</li>
				<li>A litigation fund and working relationships with labor lawyers</li>
			</ul>
			<div>Tozen Union has experienced members and resources we can rely on to help us achieve our goals.</div>
			<div>If members later decide that a different structure would better serve us, we can discuss and decide that democratically.</div>
		</ExpandingSection>

		<ExpandingSection title="What will the union do after the RTO issue is resolved?">
			<div>We aim to continue the union indefinitely. A union is not only for one issue; it gives workers an ongoing structure to improve and defend our working conditions.</div>
			<div>That can include regular negotiations over pay, evaluation processes, benefits, workload, flexibility, harassment, administrative problems, and other issues that affect employees.</div>
			<div>It also means we can respond collectively when management introduces sudden or arbitrary requirements, including targets or policies that do not meaningfully improve our work.</div>
			<div>The union&apos;s priorities will be decided democratically by members. If members vote to pursue an issue, the union can raise it with management and work toward a collective solution.</div>
		</ExpandingSection>

		<ExpandingSection title="Who will run the union?">
			<div>You will.</div>
			<div>More precisely, PayPay Workers Union will be run democratically by its members. Members will decide our priorities, vote on major decisions, and choose representatives to carry out the union&apos;s day-to-day work.</div>
			<div>
				At minimum, we will elect three local officers:
				<ul>
					<li>A president to coordinate the overall direction of the local</li>
					<li>A secretary to keep records of meetings, votes, and decisions</li>
					<li>A treasurer to manage local finances and accounting</li>
				</ul>
			</div>
			<div>If members decide that other roles are needed, we can create them through our democratic process.</div>
			<div>Even if you are not elected to a formal role, the union depends on members taking part. Every discussion, vote, and contribution helps decide what the union becomes.</div>
		</ExpandingSection>

		<ExpandingSection title="How are the 2000 yen monthly dues used?">
			<div>The 2000 yen monthly dues are Tozen Union dues. They are paid into Tozen&apos;s shared budget, not kept as a PayPay-only fund.</div>
			<div>Those dues support the common work of the union across its locals, including organizers, case support, administration, legal and organizing work, communications, and other union activities approved through Tozen&apos;s democratic budget process.</div>
			<div>Tozen&apos;s budget, financial reports, and dues are handled through its democratic process, and members have the right to review union financial records.</div>
			<div>If PayPay local members decide that we need separate funds for PayPay-specific activities, any additional local dues would be discussed and decided democratically by PayPay local members.</div>
		</ExpandingSection>
	</div>
}
