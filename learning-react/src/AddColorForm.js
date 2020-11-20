import React from "react";
import { useInput } from "./hooks";//是一个列表,两个对象第一个是 {值,onChange} 第二个是设定为初始值的函数...
import { useColors } from "./ColorProvider";//使用打包过的应用端
import { css } from "emotion";

export default function AddColorForm() {
  const [titleProps, resetTitle] = useInput("");//前者是 {value,onChange},后者是设置为初始值的函数
  const [colorProps, resetColor] = useInput("#FFFFFF");
  const { addColor } = useColors();//应用端口只用addColor..

  const handleSubmit = e => {
    e.preventDefault();
    addColor(titleProps.value, colorProps.value);
    resetTitle();
    resetColor();
  };
  // console.log(titleProps,colorProps,"1111111111111")

  return (
    <form
      className={css`
        display: flex;
        justify-content: space-around;
        margin: 0.25em;
        button {
          margin: 0.25em;
        }
        input {
          margin: 0.25em;
          &:first-child {
            flex: 1;
          }
        }
      `}
      onSubmit={handleSubmit}
    >
      <input
        {...titleProps}//就是将value和onchange解包出来..
        type="text"
        placeholder="颜色名称..."
        required
      />
      <input {...colorProps} type="color" required />
      <button>添加</button>
    </form>
  );
}
