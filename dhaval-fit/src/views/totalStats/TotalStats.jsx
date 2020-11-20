import React from "react";
import { Statistic, Card, Row, Col } from "antd";
import {
	ThunderboltOutlined,
	ClockCircleOutlined,
	QqOutlined,
	BookOutlined,
} from "@ant-design/icons";

function TotalStats() {
	const stats = {
		time: "512",
		workouts: "6",
		steps: "47994",
		pages: "34",
	};
	return (
		<div className="site-statistic-demo-card">
			<Row gutter={16}>
				<Col span={6}>
					<Card className="statsSecond">
						<Statistic
							title="Workouts"
							value={stats.workouts}
							precision={0}
							valueStyle={{ color: "#3f8600" }}
							prefix={<ThunderboltOutlined />}
							suffix=""
						/>
					</Card>
				</Col>
				<Col span={6}>
					<Card className="statsSecond">
						<Statistic
							title="Minutes spent exercising"
							value={stats.time}
							precision={0}
							valueStyle={{ color: "#3f8600" }}
							prefix={<ClockCircleOutlined />}
							suffix=""
						/>
					</Card>
				</Col>
				<Col span={6}>
					<Card className="statsSecond">
						<Statistic
							title="Steps taken"
							value={stats.steps}
							precision={0}
							valueStyle={{ color: "#3f8600" }}
							prefix={<QqOutlined />}
							suffix=""
						/>
					</Card>
				</Col>
				<Col span={6}>
					<Card className="statsSecond">
						<Statistic
							title="Pages Read"
							value={stats.pages}
							precision={0}
							valueStyle={{ color: "#3f8600" }}
							prefix={<BookOutlined />}
							suffix=""
						/>
					</Card>
				</Col>
			</Row>
		</div>
	);
}
export default TotalStats;
