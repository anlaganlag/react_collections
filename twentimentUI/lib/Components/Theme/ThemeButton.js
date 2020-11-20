import IconButton from "@material-ui/core/IconButton";
import Brightness2Icon from "@material-ui/icons/Brightness2";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import styled from "styled-components";

const StyledIconButton = styled(IconButton)`
  position: fixed !important;
  top: ${({ theme }) => +theme.preset.header.top.split("px")[0] + 1}px;
  right: ${({ theme }) => theme.preset.header.side};
  z-index: ${({ theme }) => theme.zIndex.themeButton};
  svg {
    fill: ${({ theme }) => theme.color.dark[0]} !important;
  }
`;

function ThemeButton({ themeMode, setThemeMode }) {
  const isDark = themeMode === "dark";

  const nextTheme = isDark ? "light" : "dark";

  return (
    <StyledIconButton
      size="small"
      aria-label={`Set theme to ${nextTheme} mode.`}
      color="inherit"
      onClick={() => setThemeMode(nextTheme)}
    >
      {themeMode === "light" ? (
        <Brightness2Icon style={{ transform: "rotate(140deg" }} />
      ) : (
        <WbSunnyIcon />
      )}
    </StyledIconButton>
  );
}

export default ThemeButton;
