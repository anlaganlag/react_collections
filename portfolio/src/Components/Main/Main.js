import React from "react";
import Article from "./Article";

const Main = () => {
    const articles = [
        {
            heading: "About",
            p1: `我是前端工程师 我喜欢工作`,
            p2: `工作能实现我的价值`,
            technologies: true,
        },
        {
            heading: "Portfolio",
            portfolio: true,
        },
        {
            heading: "Contact",
            p1: `现在联系`,
            form: true,
        },
    ];
    return (
        <main>
            {articles.map((data, index) => {
                return <Article data={data} index={index} key={index} />;
            })}
        </main>
    );
};

export default Main;
