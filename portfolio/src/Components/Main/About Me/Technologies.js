import React, { useState } from "react";
import Languages from "./Languages";
import Tools from "./Tools";
import styles from "../../../CSS/Main/About/Technologies.module.css";

const Technologies = () => {
    const [card, setCard] = useState("languages");
    const handleSetCard = (input) => {
        return setCard(input);
  };
  const selectedLangs = card === "languages" ? styles.selected : '';
  const selectedTools = card === "tools" ? styles.selected : '';

    return (
        <div className={styles.container}>
            <p>我喜欢用的工具:</p>
            <div className={styles.buttonContainer}>
                <button
                    onClick={() => handleSetCard("languages")}
                    className={`${styles.button} ${selectedLangs}`}
                >
                    语言 & 框架
                </button>
                <button
                    onClick={() => handleSetCard("tools")}
                    className={`${styles.button} ${selectedTools}`}
                >
                    工具
                </button>
            </div>

            <div className={styles.technologiesContainer}>
                {card === "languages" && <Languages />}
                {card === "tools" && <Tools />}
            </div>

            <div className={styles.technologiesContainer}></div>
        </div>
    );
};

export default Technologies;
