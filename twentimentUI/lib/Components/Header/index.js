import styled from "styled-components";
import { scroll, app } from "../../utils";
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub";
import NPMSVG from "./NPMSVG";

const StyledDiv = styled.div`
  position: fixed;
  background-color: ${({ theme }) => theme.color.light[0]};
  width: 100%;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  z-index: ${({ theme }) => theme.zIndex.header};
  padding: ${({ theme }) =>
    theme.preset.header.top + " " + theme.preset.header.side};
  padding-right: 45px;
`;

const StyledH1 = styled.h1`
  color: ${({ theme }) => theme.color.dark[0]};
  font-size: ${({ theme }) => theme.fontSize.xxxl};
  font-weight: 100;
  cursor: pointer;
  opacity: 0.8;
  &:hover {
    opacity: 1;
    transition: ${({ theme }) => theme.transition};
  }
`;

const StyledIconButton = styled(IconButton)`
  svg,
  path.npm-one {
    transition: 0.05s;
    fill: ${({ theme }) => theme.color.dark[0]};
  }
  path.npm-two {
    transition: 0.05s;
    fill: ${({ theme }) => theme.color.light[0]};
  }
`;

const Header = ({ setView }) => (
  <StyledDiv>
    <button
      onClick={() => {
        setView("about");
        scroll.toMain();
      }}
    >
      <StyledH1>{app.nameLowerCase}</StyledH1>
    </button>
    <div>
      {[
        {
          label: "See " + app.nameUpperCase + "'s NPM package.",
          href: app.url.npm,
          icon: NPMSVG,
          style: { borderRadius: "0" },
        },
        {
          label: "See " + app.nameUpperCase + "'s GitHub repository.",
          href: app.url.github,
          icon: GitHubIcon,
        },
      ].map((link, index) => (
        <StyledIconButton
          key={index}
          size="small"
          aria-label={link.label}
          style={{ marginRight: 15, ...link.style }}
          onClick={() => window.open(link.href, "_blank")}
        >
          <link.icon />
        </StyledIconButton>
      ))}
    </div>
  </StyledDiv>
);

export default Header;
