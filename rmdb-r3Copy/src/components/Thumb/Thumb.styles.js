import styled from 'styled-components';

export const Image = styled.img`
  width: 100%;
  // display:relative;
  max-width: 720px;
  transition: all 0.3s;
  object-fit: cover;
  border-radius: 20px;
  animation: animateThumb 0.5s;


  :hover {
    opacity: 0.8;
  }
  

  @keyframes animateThumb {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Text = styled.div`

h5{
  display:absolute;

  font-size: var(--fontSmall);
  text-align:center;

  margin:0;

    @media screen and (max-width: 720px) {
      font-size: var(--fontMed);
    }
  }

   small {
    font-size: var(--fontSuperSmall);
    text-align:center;
    opacity:0.45;
    display:block;
    color:red;



    @media screen and (max-width: 720px) {
      display:none
    }
  }
  


  }
`;

