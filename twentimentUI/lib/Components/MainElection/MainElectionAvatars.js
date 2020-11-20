import styled from "styled-components";
import Avatar from "@material-ui/core/Avatar";

const StyledDiv = styled.div`
  display: flex;
  margin: 15px 0 30px 0;

  .MuiAvatar-root.MuiAvatar-circle {
    height: 80px;
    width: 80px;
  }

  // *** DEMOCRAT AVATAR ***
  .MuiAvatar-root.MuiAvatar-circle:nth-of-type(1) {
    border: solid 2px ${({ theme }) => theme.color.blue[0]};
  }

  // *** REPUBLICAN AVATAR ***
  .MuiAvatar-root.MuiAvatar-circle:nth-of-type(2) {
    border: solid 2px ${({ theme }) => theme.color.red[0]};
    margin-left: 20px;
  }
`;

function MainElectionAvatars({ candidates }) {
  const resolver = {
    "Donald Trump": "/avatars/trump.png",
    "Hillary Clinton": "/avatars/clinton.png",
    "Joe Biden": "/avatars/biden.png",
  };

  return candidates ? (
    <StyledDiv>
      {candidates.map((candidate, index) => (
        <Avatar key={index} alt={candidate} src={resolver[candidate]} />
      ))}
    </StyledDiv>
  ) : (
    ""
  );
}

export default MainElectionAvatars;
