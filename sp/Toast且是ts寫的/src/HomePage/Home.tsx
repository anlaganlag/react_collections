import React from "react";
import clsx from "clsx";
import StayledButton from "../Components/Buttons/StayledButton";
import { useToast } from "../Components/Toast/ToastProvider";

export default function HomePage() {
  const toast = useToast();

  return (
    <div
      className={clsx(
        "mx-auto relative my-auto p-5 bg-white",
        "shadow-md rounded-md border border-gray-200 "
      )}
    >
      <div className="flex my-auto h-full">
        <div
          className={clsx(
            "flex relative flex-row gap-x-5 w-full",
            "justify-center align-middle my-auto "
          )}
        >
          <StayledButton
            variant="primaryred"
            onClick={() => toast?.pushError("牛逼 出錯了", 5000)}
          >
            錯誤
          </StayledButton>
          <StayledButton
            variant="primaryorange"
            onClick={() => toast?.pushWarning("警告 出現了")}
          >
            警告
          </StayledButton>
          <StayledButton
            variant="primarygreen"
            onClick={() => toast?.pushSuccess("操作 成了")}
          >
            成功
          </StayledButton>
          <StayledButton
            variant="primaryblue"
            onClick={() => toast?.pushInfo("信息 消息文本")}
          >
            信息
          </StayledButton>
        </div>
      </div>
    </div>
  );
}
