import React from "react";
import Fade from "react-reveal/Fade";
import Button from "../Utilities/Button";
import avatar from "../../Assets/img/avatar.svg";
import { HashLink as Link } from "react-router-hash-link";
import styles from "../../CSS/Landing/Landing.module.css";

const Landing = () => {
    return (
        <header id="landing" className={`${styles.landing} ${"container"}`}>
            <Fade>
                <section className={styles.welcome}>
                    <h1>
                        <span>哈喽!</span>
                        <br />
                        <span>我是高方</span>
                    </h1>
                    <h2>前端工程师</h2>
                    <Link smooth to="/#portfolio">
                        <Button input={"作品"} />
                    </Link>
                </section>
                <section className={styles.avatar}>
                    <img src={avatar} alt=" 我的图片 " />
                </section>
            </Fade>
        </header>
    );
};

export default Landing;
