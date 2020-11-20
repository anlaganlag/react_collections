import React, { useRef } from "react";
import {
	Layout,
	Carousel,
	Card,
	Row,
	Col,
	Statistic,
	Progress,
	Button,
	Tooltip,
	BackTop,
} from "antd";
import { Line } from "@ant-design/charts";
import {
	ArrowUpOutlined,
	ArrowDownOutlined,
	VerticalAlignMiddleOutlined,
	RightCircleFilled,
	LeftCircleFilled,
} from "@ant-design/icons";
import InfoCard from "./infoCard";
import TotalStats from "../totalStats";
import { config } from "../../data/weight";
import { cardData } from "../../data/cardData";
import Nutrition from "../nutrition";
import Workout from "../workout";
import ProjectDeets from "../projectDetail";
import About from "../aboutMe";
import "./styles.css";
import { useState } from "react";

const { Content, Footer } = Layout;

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

function FrontPage() {
	const myNut = useRef(null);
	const myNut1 = useRef(null);
	const refCico = useRef(null);
	const myWork = useRef(null);
	const projDeet = useRef(null);
	const aboutMe = useRef(null);
	const executeScroll = () => scrollToRef(myNut);
	const executeScroll1 = () => scrollToRef(myNut1);
	const executeScrollCico = () => scrollToRef(refCico);
	const executeScrollWork = () => scrollToRef(myWork);
	const executeScrollDeets = () => scrollToRef(projDeet);
	const executeScrollAboutMe = () => scrollToRef(aboutMe);

	const today = cardData.length - 1;
	const [day, setDay] = useState(today);
	const [flip, setFlip] = useState(false);
	const contentStyle = {
		color: "purple",
		lineHeight: "160px",
		textAlign: "center",
		background: "#f5f5ff",
	};
	const flipAnimation = {
		transformOrigin: "50% -1.5%",
		animation: `${flip ? "flip 1s infinite linear" : ""}`,
	};

	function flipCal() {
		setFlip(true);
		setTimeout(() => setFlip(false), 1000);
	}

	return (
		<Layout className="layout">
			<BackTop />
			<div>
				<ul id="menu">
					<li>
						<a href="#">Dashboard</a>
					</li>
					<li>
						<a href="#" onClick={executeScroll}>
							Nutrition
						</a>
						<ul>
							<li>
								<a href="#" onClick={executeScroll1}>
									First Steps
								</a>
							</li>
							<li>
								<a href="#" onClick={executeScrollCico}>
									CICO
								</a>
							</li>
						</ul>
					</li>
					<li>
						<a href="#" onClick={executeScrollWork}>
							Workout
						</a>
						<ul>
							<li>
								<a href="#">Basics</a>
							</li>
							<li>
								<a href="#">Cardio</a>
							</li>
							<li>
								<a href="#">Resistance training</a>
							</li>
						</ul>
					</li>
					<li>
						<a href="#" onClick={executeScrollDeets}>
							This Project
						</a>
					</li>
					<li>
						<a href="#" onClick={executeScrollAboutMe}>
							About Me
						</a>
					</li>
				</ul>
			</div>
			<Content>
				<div className="site-layout-content">
					<div className="header">
						<div>
							<h2>75 {/* <p>HARD</p>  */}Days To</h2>
							<div style={{ display: "flex", marginTop: "-40px" }}>
								<h2 style={{ padding: "0px" }}>Gl</h2>{" "}
								<Progress
									type="circle"
									trailColor="grey"
									strokeColor="#5450a8"
									percent={3}
									format={(percent) => `Day ${percent}`}
									width={90}
								/>
								<h2 style={{ padding: "0px 30px 10px 10px" }}>ry</h2>
							</div>
						</div>

						<div>
							<img alt="gym" className="mainSvg" src={require("./gym1.gif")} />
						</div>
						<div>
							<div className="site-statistic-demo-card">
								<Row gutter={16}>
									<Col span={8}>
										<Card>
											<Statistic
												title="Start"
												value={84.4}
												precision={1}
												valueStyle={{ color: "#3f8600" }}
												prefix={<ArrowUpOutlined />}
												suffix="Kg"
											/>
										</Card>
									</Col>
									<Col span={8}>
										<Card>
											<Statistic
												title="Current"
												value={77.2}
												precision={1}
												valueStyle={{ color: "#5450a9" }}
												prefix={<VerticalAlignMiddleOutlined />}
												suffix="Kg"
											/>
										</Card>
									</Col>
									<Col span={8}>
										<Card>
											<Statistic
												title="Goal"
												value={69}
												precision={1}
												valueStyle={{ color: "#cf1322" }}
												prefix={<ArrowDownOutlined />}
												suffix="Kg"
											/>
										</Card>
									</Col>
								</Row>
							</div>
							<div>
								<TotalStats />
							</div>
						</div>
					</div>
					<Carousel style={{ marginTop: "-10%" }} effect="fade">
						<div>
							<h3 style={contentStyle}>
								<Line {...config} />
							</h3>
						</div>
					</Carousel>
					<div className="sectionHead">
						<h1>Daily Progress</h1>
						{/* <img
							className="goalSvg"
							src="https://www.flaticon.com/svg/static/icons/svg/2755/2755544.svg"
						/> */}
					</div>
					<div className="cardNav">
						<Tooltip placement="left" title="Go to previous day">
							<Button
								style={{ marginRight: "90px" }}
								type="text"
								onClick={() => {
									flipCal();
									setDay(day - 1);
								}}
								disabled={day === 0}
								icon={<LeftCircleFilled />}
							></Button>
						</Tooltip>

						<Tooltip placement="top" title="Go to today">
							<Button
								onClick={() => {
									flipCal();
									setDay(today);
								}}
								type="link"
							>
								<div className="icon calendar">
									<i></i>
									<i style={flipAnimation}>{/* {day} */}</i>
								</div>
							</Button>
						</Tooltip>
						<Tooltip placement="right" title="Go to next day">
							<Button
								style={{ marginLeft: "90px" }}
								type="text"
								onClick={() => {
									flipCal();
									setDay(day + 1);
								}}
								disabled={day === today}
								icon={<RightCircleFilled />}
							></Button>
						</Tooltip>
					</div>
					<InfoCard cardData={cardData[day]} />
					<div ref={myNut}>
						<h1
							style={{ paddingTop: "100px", paddingBottom: "80px" }}
							className="sectionHead"
						>
							NUTRITION
						</h1>
						<Nutrition refBasic={myNut1} refCico={refCico} />
					</div>
					<div ref={myWork}>
						<h1
							style={{ paddingTop: "1px", paddingBottom: "80px" }}
							className="sectionHead"
						>
							WORKOUT
						</h1>
						<Workout />
					</div>
					<div ref={projDeet}>
						<h1
							style={{ paddingTop: "1px", paddingBottom: "80px" }}
							className="sectionHead"
						>
							WHAT IS THIS ?
						</h1>
						<ProjectDeets />
					</div>
					<div ref={aboutMe}>
						<h1
							style={{ paddingTop: "1px", paddingBottom: "80px" }}
							className="sectionHead"
						>
							ABOUT ME
						</h1>
						<About />
					</div>
				</div>
			</Content>
			<Footer
				style={{
					textAlign: "center",
					fontFamily: "Hoefler Text, Georgia, Garamond, Times, serif",
					fontSize: "18px",
					backgroundColor: "#ccc",
				}}
			>
				Don't let perfect be the enemy of good.
			</Footer>
		</Layout>
	);
}
export default FrontPage;
