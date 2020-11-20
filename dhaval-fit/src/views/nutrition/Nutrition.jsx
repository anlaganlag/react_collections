import React from "react";
import { Tabs, Collapse } from "antd";
import Tdee from "../../components/tdee";
import "./style.css";

const { TabPane } = Tabs;
const { Panel } = Collapse;

function Nutrition({ refBasic, refCico }) {
	return (
		<div className="blogText">
			<p>Before we start, why should you trust me?</p>
			<p>
				YOU SHOULDNT. Whatever i am writing is based on my past experiences and
				whatever research i have done. DO YOUR OWN DAMN RESEARCH, it will help
				you a lot once you start to understand how it actually works. I will try
				and include links wherever possible but nothing beats reading up things
				on your own.
			</p>
			<p>That being said, let's begin!</p>
			<h3 ref={refBasic}>First Steps</h3>
			<p>
				As a begginer there are only 2 things to keep in mind when it comes to
				Nutrition.
			</p>
			<div style={{ paddingBottom: "20px" }}>
				<Collapse
					accordion
					bordered={false}
					className="site-collapse-custom-collapse"
				>
					<Panel
						header="Consistency is the key"
						key="1"
						className="site-collapse-custom-panel"
					>
						<p>
							This is one of the most important and easily the hardest things.
							But you gotta do it everyday, there is no point following a yo-yo
							diet. As someone rightly said
						</p>
						<p>
							"Screw Motivation, What you need is Discipline. Motivation is
							fleeting, inconsistent. Discipline is permanent, in control."
						</p>
					</Panel>
					<Panel
						header="The KISS Principle"
						key="2"
						className="site-collapse-custom-panel"
					>
						<a href="https://en.wikipedia.org/wiki/KISS_principle">
							Keep it simple, stupid &nbsp;
						</a>
						<p>
							To stay consistent, you have to keep it simple. Create habits
							which you can follow for a long time. The sooner you realise this,
							the eaiser it is for you. Dont set yourself for failure by setting
							the bar too high in the first place itself.
						</p>
					</Panel>
				</Collapse>
			</div>

			<p>Keeping that in mind, the 3 most basic habbits to tackle first are</p>
			<Tabs defaultActiveKey="1">
				<TabPane tab="Sleep" key="1">
					<span className="tldrText">TLDR: Sleep around 8hrs a day.</span>
					<p>
						One of the most important aspect of getting in shape, whether it's
						losing fat or gaining muscle, is getting enough sleep. Usually
						recomended 8hrs a day is the sweet spot but anywhere from 7-9 should
						be good enough. Good sleep helps your body recover well and at the
						same time keeps the hormones in check which have a huge effect on
						how your body feels.
					</p>
				</TabPane>
				<TabPane tab="Water" key="2">
					<span className="tldrText">
						TLDR: Drink around 1 Gallon(3.7L) of water everyday.{" "}
					</span>
					<p>
						Cannot stress enough how important drinking water is for you. Being
						one of the simplest things to control it's easily one of the most
						neglected one too. Can vary a bit on where you live and what time of
						the year it is but make it a point to drink around 1 gallon(3.7L) of
						water everyday.
					</p>
				</TabPane>
				<TabPane tab="Clean Eating" key="3">
					<span className="tldrText">
						TLDR: Eat clean, cut out proccesed foods and sugar.
					</span>
					<p>
						Start small. Cut out few things you know is unhealthy and you
						consume a lot. The most common place to start would be junk/fast
						food, refined sugar, soft drinks etc. You dont need to stop
						completely, just reduce the amount and see how you feel. The best
						way is to replace it by something healthy, for eg instead of
						drinking 2 cans of soda, have one can with a glass of water. One of
						the hardest of the 3 habbits to overcome for sure.
					</p>
					<p>
						<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4077693/">
							Research &nbsp;
						</a>
						has shown we usually associate few kinds of food to the activity we
						are doing. For example, I always ate chips or fried stuff while
						watching movies/Tv shows. Unconsiously I had associated eating those
						things with watching something, it was much easier to keep it in
						check once I knew what the trigger was. I started chewing gum to
						overcome this and it worked wonders. Find your trigger and work on
						it.
					</p>
				</TabPane>
			</Tabs>
			<p>
				Once you have these simple habits down, its time to calculate a bit.
			</p>
			<h3 ref={refCico}>CICO</h3>
			<p>
				Losing weight is a very simple science, eat less than what your body
				needs and the scale will go down. To know how many calories your body
				needs, you need to calculate your &nbsp;
				<a href="https://tdeecalculator.net/">
					TDEE(total daily energy expenditure).
				</a>
			</p>
			<p>
				CICO stands for "calories in, calories out". Now that you know how many
				calories you need, you want to know your calories intake.
			</p>
			<Tabs defaultActiveKey="1">
				<TabPane tab="Tracking" key="1">
					<span className="tldrText">TLDR: Track your Macros.</span>
					<p>
						You need to start tracking anything and everything that goes in your
						mouth. Once you get a decent idea what food contains what macros, it
						will get easier trust me, but for the first few weeks its a chore.
						There are a lot of great apps to help with this, i use MFP(My
						Fitness Pal).
					</p>
				</TabPane>
				<TabPane tab="Use a Food Scale" key="2">
					<span className="tldrText">TLDR: Use a food scale.</span>
					<p>
						The title says it all. Dont try to guess, its not so easy. Use a
						food scale it will make your task of tracking really easy and keep
						you on point.
					</p>
				</TabPane>
				<TabPane tab="Eat Simple/Cook at home" key="3">
					<span className="tldrText">TLDR: Eat Food that is easy to track</span>
					<p>
						Its really easy to know whats on your plate if you have cooked it
						yourself and you can make sure there are no hidden calories
						anywhere. If you can't cook at home try and eat/order from places
						that tell you the macros so that your calculations are not messed
						up.
					</p>
				</TabPane>
			</Tabs>
			<h3>Managing Macros </h3>
			<p>
				Now there a ton of myths on this topic, so we shall go a bit deeper into
				this topic so you can make your choices smartly. First Lets see what the
				macros are and what do they do!
			</p>
			<Tabs>
				<TabPane tab="Protein" key="1"></TabPane>

				<TabPane tab="Carbohydrates" key="2">
					<span className="tldrText">
						TLDR: Carbs are your main energy source(NOT YOUR ENEMY)
					</span>
					<p>
						Carbs are the most hated of all macros for no reason at all. The
						main purpose of carbs is to provide you instant energy. They will
						also help in recovery after you workout. The main reason people feel
						like eating carbs makes them gain weight is because carbs store
						water, so the instant weight you start losing after eating less
						carbs is majorly water weight and will all come back once you start
						eating carbs again.
					</p>
					<p>
						What you want is a suatainable way to lose weight and not gain it
						all back the next day you stop dieting. So eat your carbs, in
						moderation. There are 2 types of carbs
						<Tabs>
							<TabPane tav="Complex Carbs" key="1">
								<span className="tldrText">
									TLDR: Complex Carbs are good for you. Eg: wheat, rice,
									vegetables, fruits, oats etc..
								</span>
								<p>
									Complex carbs are made of complex molecules strung in long
									chains and takes more time and energy for your body to digest
									them. As it takes longer for them to digest, they keep you
									full and provide energy throughout the day.
								</p>
							</TabPane>
						</Tabs>
					</p>
				</TabPane>
				<TabPane tab="Fats" key="3"></TabPane>
			</Tabs>
			<Tdee />
		</div>
	);
}
export default Nutrition;
