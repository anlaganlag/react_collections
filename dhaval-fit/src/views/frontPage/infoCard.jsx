import React, { useState } from "react";
import { Table, Card, Row, Col, Avatar, Popover } from "antd";
import ExtraInfo from "../extraInfo";
import { InView } from "react-intersection-observer";

const { Meta } = Card;

const columns = [
	{
		title: "Meal",
		dataIndex: "meal",
		key: "meal",
	},
	{
		title: "Calories",
		dataIndex: "cal",
		key: "cal",
	},
	{
		title: "Macros",
		dataIndex: "mac",
		key: "mac",
	},
];
const column = [
	{
		title: "Exercise",
		dataIndex: "exe",
		key: "exe",
	},
	{
		title: "Reps",
		dataIndex: "rep",
		key: "rep",
	},
	{
		title: "Set RM",
		dataIndex: "set",
		key: "set",
	},
];

function InfoCard({ cardData }) {
	const [popoverOpen, setPopoverOpen] = useState(false);
	const popTitle = <div style={{ textAlign: "center" }}>Total Macros</div>;
	const { extraInfo } = cardData;
	const macros = (
		<InView
			as="div"
			onChange={(inView, entry) => setPopoverOpen(inView)}
			className="infoPop"
		>
			<ExtraInfo
				value={extraInfo.p}
				postUrl="https://www.flaticon.com/svg/static/icons/svg/3082/3082022.svg"
				preUrl="https://www.flaticon.com/svg/static/icons/svg/3081/3081928.svg"
			/>
			<ExtraInfo
				value={extraInfo.f}
				postUrl="https://www.flaticon.com/svg/static/icons/svg/2599/2599612.svg"
				preUrl="https://www.flaticon.com/svg/static/icons/svg/2599/2599597.svg"
			/>
			<ExtraInfo
				value={extraInfo.c}
				postUrl="https://www.flaticon.com/svg/static/icons/svg/3081/3081918.svg"
				preUrl="https://www.flaticon.com/svg/static/icons/svg/3081/3081804.svg"
			/>
		</InView>
	);

	return (
		<div>
			<div className="dayTag">
				{/* 				<Tag icon={<CalendarOutlined />} color="rgb(169 168 212)">
					{`Day ${cardData.day}`}
				</Tag> */}
			</div>
			<div className="cardCont">
				<Card
					title={
						<Meta
							className="workCardMeta"
							avatar={
								<Avatar
									className="transform"
									size="large"
									src="https://www.flaticon.com/svg/static/icons/svg/2921/2921855.svg"
								/>
							}
						/>
					}
					bordered={false}
					style={{
						width: "95%",
						margin: "0 auto",
						borderRadius: "10px",
						boxShadow: "0 3px 25px rgba(0, 0, 0, 0.1)",
					}}
					className="nutCard"
				>
					<Row>
						<Col span="6">
							<img
								alt="img"
								style={{
									objectFit: "contain",
									maxWidth: "200px",
									maxHeight: "300px",
								}}
								src={cardData.pic}
							/>
						</Col>
						<Col span="12">
							<Table
								columns={columns}
								dataSource={cardData.food}
								expandable={{
									expandedRowRender: (record) => (
										<p style={{ margin: 0 }}>{record.description}</p>
									),
								}}
								pagination={{ position: ["none", "bottomCenter"] }}
							/>
						</Col>
						<Col span="6" style={{ justifyContent: "center", display: "grid" }}>
							<Popover
								placement="rightTop"
								content={macros}
								title={popTitle}
								trigger="hover"
							>
								<div>
									<ExtraInfo
										value={extraInfo.intake}
										postUrl="https://www.flaticon.com/svg/static/icons/svg/2860/2860853.svg"
										preUrl="https://www.flaticon.com/svg/static/icons/svg/2862/2862227.svg"
										popoverOpen={popoverOpen}
									/>
								</div>
							</Popover>
							<ExtraInfo
								value={extraInfo.burned}
								postUrl="https://image.flaticon.com/icons/png/512/1350/1350083.png"
								preUrl="https://www.flaticon.com/svg/static/icons/svg/1349/1349981.svg"
							/>
							<ExtraInfo
								value={extraInfo.steps}
								postUrl="https://www.flaticon.com/svg/static/icons/svg/2149/2149464.svg"
								preUrl="https://www.flaticon.com/svg/static/icons/svg/2149/2149109.svg"
							/>
							<ExtraInfo
								value={extraInfo.water}
								postUrl="https://www.flaticon.com/svg/static/icons/svg/3017/3017715.svg"
								preUrl="https://www.flaticon.com/svg/static/icons/svg/3017/3017682.svg"
							/>
							<ExtraInfo
								value={extraInfo.sleep}
								postUrl="https://www.flaticon.com/svg/static/icons/svg/3094/3094845.svg"
								preUrl="https://www.flaticon.com/svg/static/icons/svg/3094/3094655.svg"
							/>
						</Col>
					</Row>
					<Row>
						<div>Date : {cardData.date}</div>
					</Row>
				</Card>
				<Card
					title={
						<Meta
							className="workCardMeta"
							avatar={
								<Avatar
									size="large"
									src="https://www.flaticon.com/svg/static/icons/svg/2936/2936886.svg"
								/>
							}
						/>
					}
					bordered={false}
					style={{
						width: "100%",
						margin: "0 auto",
						borderRadius: "10px",
						boxShadow: "0 3px 25px rgba(0, 0, 0, 0.1)",
					}}
				>
					<div className="workCard">
						<Table
							columns={column}
							dataSource={cardData.gym}
							expandable={{
								expandedRowRender: (record) => (
									<p style={{ margin: 0 }}>{record.description}</p>
								),
							}}
							pagination={{ pageSize: 5 }}
						/>
					</div>
				</Card>
			</div>
		</div>
	);
}

export default InfoCard;
