import * as React from "react"
import { DiscordLink } from "./DiscordLink"
import { ExpandingSection } from "./ExpandingSection"
import { tc } from "../utils/tc"
import { PageHeader } from "./PageHeader"

export const FAQPage = () => {
	return <div>
		<PageHeader>FAQ</PageHeader>
		<div className={tc("s4", "bold", "p8")}>
			<a href="https://tozenunion.org/japanese-law/trade-union-law/">Tozen Union FAQ on Japanese Trade Union Law</a>
		</div>
		<ExpandingSection title="What is a workers union?">
			<div>A workers union is a group of workers, usually from the same company or industry, that come together to negotiate with their employer for better working conditions.</div>
			<div>When company management makes decisions that make working at the company more difficult people working at that company don't have a lot of options.</div>
			<div>You can accept the worse conditions, try to find alternative employment, or if many workers are upset about the issue you can collectively confront the management and pressure them to change their mind.</div>
			<div>This type of organization is recognised under Japanese law and participating in a union is legally protected. It is illegal for any company to target or harrass you for being a part of a union or to </div>
		</ExpandingSection>

		<ExpandingSection title="What are the main goals of the PayPay Workers Union?">
			<div>Our founding issue is opposition to the mandatory Return To Office policy.</div>
			<div>Our first objective as a union will be to enter collective bargaining with PayPay to limit the mandatory RTO to the new rules, or to reverse it completely.</div>
			<div>However our long term goals are to protect the working conditions and rights of all PayPay employees.</div>
		</ExpandingSection>

		<ExpandingSection title="How will we decide whether to aim for reversing the RTO policy, demanding no more increase in RTO or any other course of action?">
			<div>Our union is democratic, and we will hold a discussion and a vote before proceeding with any demands to the company.</div>
		</ExpandingSection>

		<ExpandingSection title="How can the union get PayPay to reverse the RTO policy?">
			<div>The first stem is a process called collective bargaining. After we decide on our demands we will approach the leadership of PayPay and present our case.</div>
			<div>This will be a formal meeting between a few of our union members who will be chosen as negotiatiors and whoever PayPay will send.</div>
			<div>The company must grant us this meeting according to Japanese law and listen to our proposals in good faith. </div>
			<div>We will make our case about why RTO is a bad policy not only for the employees but also for the company, and present our preferred solution.</div>
			<div>If the company decides to ignore our request we are then able to escalate the issue and go on strike.</div>
			<div>The PayPay Union will then hold a discussion and vote to see if we should strike, and how we should strike.</div>
			<div>There are many ways to strike.</div>
			<ul>
				<li>Coming to the office but not doing any work there and taking up a lot of space.</li>
				<li>Making placards and doing a demonstration in front of the office.</li>
			</ul>
			<div>The threat of bad publicity, or an incident happening while a good portion of the developers are on strike is the main leverage that we have as a union to force management into negotiating.</div>
			<div>Our aim is to achieve our goals through negotiation, but if the company is stubborn these are the actions we can take to encourage them. </div>
		</ExpandingSection>

		<ExpandingSection title="Won't the company punish me or fire me for being a part of the union?">
			<div>To fire an employee in Japan the company must state the reason, and show that they provided the employee ample opportunity to rectify the issue.</div>
			<div>Firing an employee for being a part of the union is a violation of Japanese law and is illegal.</div>
			<div>Other means of harrassing union members like threatening them with lower pay or longer hours is also illegal and if you have any evidence of this behavious it can be used to get legal retribution against the company.</div>
			<div>This is in one of the main strengths of a union. If you are harrassed by the company for any reason, even unrelated to the union, laywyers and union representatives are there to help you.</div>
		</ExpandingSection>

		<ExpandingSection title="How can I join the union?">
			<div>Right now we are gathering our members at our <DiscordLink>Discord Server</DiscordLink></div>
			<div>Members will need to register to the <a href="https://join.tozenunion.org/">Tozen Union</a></div>
			<div>We will be holding our founding meeting soon, but you can join the union at any time.</div>
		</ExpandingSection>

		<ExpandingSection title="What will be required of me as a member?">
			<div>These are the minimum requirements for all union members:</div>
			<div>Tozen Union requires 2000 yer per month from each member. This money is used to pay for lawyers and other administrative expenses.</div>
			<div>The union must have at least one annual meeting and elections for the union officers. It is expected that all members will be present at these meetings. We are planning to have them via video conference currently.</div>
		</ExpandingSection>

		<ExpandingSection title="What is Tozen Union?">
			<div><a href="https://tozenunion.org/about/">Tozen Union(東ゼン)</a>, AKA Zenkoku Ippan Tokyo General Union, is a general workers union active in Japan since 2009. </div>
			<div>It is a union with a lot of foreign workers and includes Apple Japan employees.</div>
			<div>Ostensibly PayPay Union will be a "local union" inside of Tozen Union.</div>
		</ExpandingSection>

		<ExpandingSection title="Why is PayPay Union going to be part of Tozen Union?">
			<div>Tozen Union has:</div>
			<ul>
				<li>Almost 20 years experience with collective bargaining and industrial action</li>
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
				<div>Secondly, if harrasement, wrongful termination or tax and or visa renewal negligence related issues arise at the company the union can help represent the employees.</div>
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
				However a union is a collaborative democratic organisation so even if you aren't elected every bit of work from the members will help us achieve our goals.
			</div>
		</ExpandingSection>

		<ExpandingSection title="What will 2000 yen a month in union dues be used for?">
			<div>
				Tozen Union requires 2000 yen per month from each member in union dues.
			</div>
			<div>
				This money is used mainly for lawyers fees, but some money is spent on administrative expenses such as an office that is required for some legal procedures.
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
