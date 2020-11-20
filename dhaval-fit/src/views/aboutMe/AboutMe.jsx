import React from "react";
import {
	InstagramOutlined,
	FacebookOutlined,
	GoogleOutlined,
	GithubOutlined,
	LinkedinOutlined,
} from "@ant-design/icons";
import "./styles.css";
function About() {
	return (
		<div className="blogText">
			<p>
				Hi, I am Dhaval Singh. Someone who loves tracking data and lifting
				weights, and well this is the baby that was born out of my love for
				these 2 things.
			</p>
			<p>
				I am a software developer by day in India. Feel free to contact me for
				any further information.
			</p>
			<h3 style={{ marginTop: "50px" }}>Contact Me</h3>
			<div style={{ display: "flex", justifyContent: "space-between" }}>
				<a href="https://www.instagram.com/_dhaval._/?hl=en">
					<InstagramOutlined className="contactIcons" />
				</a>
				<a href="https://www.facebook.com/dhaval.singh12">
					<FacebookOutlined className="contactIcons" />
				</a>
				<a href="dhavalsingh19@gmail.com">
					<GoogleOutlined className="contactIcons" />
				</a>
				<a href="https://github.com/dhavalsingh">
					<GithubOutlined className="contactIcons" />
				</a>
				<a href="https://www.linkedin.com/in/dhaval-singh-502b79161/">
					<LinkedinOutlined className="contactIcons" />
				</a>
			</div>
		</div>
	);
}
export default About;
