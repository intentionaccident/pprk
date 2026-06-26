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

		<ExpandingSection title="What are the main goals of the PayPay Workers&apos; Union?">
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
			<div>Negotiations will be held between representatives of the PayPay union chosen democratically and PayPay management. Legal representatives and Tozen Union representatives may also attend to help us negotiate.</div>
			<div>PayPay managements has to meet with the union and listen to the demands. The union must present their argument about why their demands are reasonable and necessary.</div>
			<div>Our goal is to resolve issues through negotiation. If negotiation does not lead to progress, members can discuss and vote on further lawful action. This could include industrial action such as strikes, demonstrations, or other collective action, but any such step would be decided democratically by members.</div>
		</ExpandingSection>

		<ExpandingSection title="Can the company punish or fire me for joining the union?">
			<div>Employers cannot lawfully fire, threaten, harass, or otherwise disadvantage workers because they joined a union, tried to organize one, or took part in legitimate union activity. These protections are part of Japan&apos;s Labor Union Act.</div>
			<div>Any evidence showing that PayPay management is retaliating against the union members in any way can be used to demand compensation and reversal from the company.</div>
			<div>Tozen Union <a href="https://tozenunion.org/tozen-reaches-deal-with-shane-over-union-busting-wages/" target="_blank" rel="noopener noreferrer">recently had a case</a> where workers who were part of a union didn't get a raise as opposed to other workers and they were able to reverse this in the courts. Even such actions which seem difficult to prove are judged in the workers favor by Japanese courts.</div>
			<div>The union is full of people dedicated to preventing the company abusing you for any reason, with access to lawyers and experience with these kinds of cases.</div>
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

		<ExpandingSection title="What will the union do after the mandatory attendance issue is resolved?">
			<div>We aim to continue the union indefinitely. A union is not only for one issue; it gives workers an ongoing structure to improve and defend our working conditions.</div>
			<div>That can include issues such as:</div>
			<ul>
				<li>The employee evaluation process and salary increase decisions</li>
				<li>Mandatory AI use and company AI use policies</li>
				<li>Office amenities such as water and coffee</li>
			</ul>
			<div>It also means we can respond immediately when management introduces sudden or arbitrary requirements.</div>
			<div>Finally the union will be there to help any workers who might be suffering harassment or other issues at the company.</div>
		</ExpandingSection>

		<ExpandingSection title="Who will run the union?">
			<div>Workers Union will be run democratically by its members. Members will decide our priorities, vote on major decisions, and choose representatives to carry out the union&apos;s day-to-day work.</div>
			<div>
				At minimum, we will elect three local officers:
				<ul>
					<li>A president to be the main union representative</li>
					<li>A secretary to keep records of meetings, votes, and decisions</li>
					<li>A treasurer to manage local finances and accounting</li>
				</ul>
			</div>
			<div>If members decide that other roles are needed, we can create them.</div>
			<div>Even if you are not elected to a formal role, the union depends on members taking part. Every discussion, vote, and contribution helps the union get stronger and protect your rights.</div>
		</ExpandingSection>

		<ExpandingSection title="How are the 2000 yen monthly dues used?">
			<div>The 2000 yen monthly dues are Tozen Union dues. They are paid into Tozen&apos;s shared budget, not kept as a PayPay-only fund.</div>
			<div>Other Tozen members are also paying their dues so it acts as a joint fund.</div>
			<div>Mainly the money is used for legal fees and administrative expenses.</div>
			<div>When any Tozen members need to use a lawyer, Tozen Union covers that cost out of the union fund. Similarly the Tozen offices and union organizers are being paid from that fund when they help organise protests, meetings and other activities.</div>
			<div>Tozen&apos;s members have complete access to the union&apos;s accounts and have a say in the union&apos;s budget.</div>
			<div>If PayPay local members decide that we need separate funds for PayPay-specific activities, any additional local dues would be discussed and decided democratically by PayPay local members.</div>
		</ExpandingSection>

		<ExpandingSection title="It&apos;s a bit expensive, isn&apos;t it? Why should I pay">
			<div>The funds are being set aside to fight important issues and help you if the company decides to fire you or harass you for some unfair reason.</div>
			<div>Consider if the company forces all workers to come to the office every day, or forces all employees to move to Tokyo. How much money would that cost you personally?</div>
			<div>What if the company decides to make you redundant or fires you without a good reason? Even if it was an illegal reason you would need to appeal that reason in a court which would cost you money.</div>
			<div>The union will also likely pursue a demand for regular salary increases from the company in the future.</div>
			<div>The union acts somewhat like insurance. You pay a regular fee now so that later when something bad happens the union can work top protect you from those unpleasant events.</div>
		</ExpandingSection>
	</div>
}
