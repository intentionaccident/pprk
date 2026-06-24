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
			<div>Right now we are gathering our members at our <DiscordLink>Discord Server</DiscordLink></div>
			<div>Members will need to register to the <a href="https://join.tozenunion.org/" target="_blank" rel="noopener noreferrer">Tozen Union</a></div>
			<div>We will be holding our founding meeting soon, but you can join the union at any time.</div>
		</ExpandingSection>

		<ExpandingSection title="What will be required of me as a member?">
			<div>These are the minimum requirements for all union members:</div>
			<div>Tozen Union requires 2000 yen per month from each member. This money is used to pay for lawyers and other administrative expenses.</div>
			<div>The union must have at least one annual meeting and elections for the union officers. It is expected that all members will be present at these meetings. We are planning to have them via video conference currently.</div>
		</ExpandingSection>

		<ExpandingSection title="What is Tozen Union?">
			<div><a href="https://tozenunion.org/about/" target="_blank" rel="noopener noreferrer">Tozen Union(東ゼン)</a>, AKA Zenkoku Ippan Tokyo General Union, is a general workers union active in Japan since 2009. </div>
			<div>It is a union with a lot of foreign workers and includes Apple Japan employees.</div>
			<div>Ostensibly PayPay Union will be a &quot;local union&quot; inside of Tozen Union.</div>
		</ExpandingSection>

		<ExpandingSection title="Why is PayPay Union going to be part of Tozen Union?">
			<div>Tozen Union has:</div>
			<ul>
				<li>Almost 20 years&apos; experience with collective bargaining and industrial action</li>
				<li>Experience resolving conflicts between foreign workers and Japanese companies</li>
				<li>English and Japanese are used as the primary languages of the union</li>
				<li>Tozen has a litigation fund and 6 lawyers they have a working relationship with</li>
			</ul>
			<div>Tozen Union has experienced members we can rely on and resources we can use to help us achieve our goals</div>
			<div>At a later point if we wish to separate from Tozen Union or join another Union organisation we can do so</div>
		</ExpandingSection>

		<ExpandingSection title="What will the union do after the RTO policy issue is resolved?">
			<div>We aim to continue the union indefinitely.</div>
			<div>
				<div>Firstly, if other conditions are suddenly demanded by management similar to the RTO policy, the union will be there ready to respond.</div>
			</div>
			<div>
				<div>Secondly, if harassment, wrongful termination or tax and or visa renewal negligence related issues arise at the company the union can help represent the employees.</div>
			</div>
			<div>
				<div>Lastly, there are other issues that members may be interested in addressing with management.</div>
				<ul>
					<li>Remediating the individual performance quotas and the salary adjustment process</li>
					<li>Curtailing the wasteful use of AI (such as demands for all employees to make 50 prompts in ChatGPT by end of week)</li>
					<li>Return of office amenities such as coffee machines</li>
				</ul>
				<div>If the union members vote to pursue these or any other issues that may be raised the union will do so.</div>
			</div>
		</ExpandingSection>

		<ExpandingSection title="Who will run the union?">
			<div>
				By law unions must be democratically run. The structure of the union is also mostly up to the members of the union to decide, but elections must be held regularly by law.
			</div>
			<div>
				Tozen Union requires us to elect three positions
				<ul>
					<li>The President responsible for the overall direction of the union</li>
					<li>The Secretary responsible for keeping records of union meetings, votes and other record keeping</li>
					<li>The Treasurer responsible for union expenses and accounting</li>
				</ul>
			</div>
			<div>
				In the immediate future we will host elections to select these three representatives, and we will decide when and how to organise the union.
			</div>
			<div>
				However a union is a collaborative democratic organisation so even if you aren&apos;t elected every bit of work from the members will help us achieve our goals.
			</div>
		</ExpandingSection>

		<ExpandingSection title="What will 2000 yen a month in union dues be used for?">
			<div>
				Tozen Union requires 2000 yen per month from each member in union dues.
			</div>
			<div>
				This money is used mainly for lawyers&apos; fees, but some money is spent on administrative expenses such as an office that is required for some legal procedures.
			</div>
			<div>
				We will also discuss and vote if we should have a separate smaller monthly fee for administration of PayPay Union resources, or for strike relief.
			</div>
			<div>
				Tozen Union provides all of their accounting records to their members, and demands that member unions such as PayPay Union do the same. If any union member is dissatisfied with the use of the union dues they can point out the problem and resolve it democratically.
			</div>
		</ExpandingSection>
	</div>
}
