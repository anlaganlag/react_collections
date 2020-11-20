import React from "react";
import PropTypes from "prop-types";
// Helpers
import { calcTime, convertMoney } from "../../helpers";
// Styles
import { Wrapper, Content } from "./MovieInfoBar.styles";

const MovieInfoBar = ({ time, budget, revenue }) => {
  
    return (time > 0 || budget > 0 || revenue > 0) 
    ?(
      <Wrapper>
        <Content>
          {time > 0 && (
            <div className="column">
              <p>時長: {calcTime(time)}</p>
            </div>
          )}
          {budget > 0 && (
            <div className="column">
              <p>成本:{convertMoney(budget)}</p>
            </div>
          )}
          {revenue > 0 && (
            <div className="column">
              <p>票房:{convertMoney(revenue)}</p>
            </div>
          )}
        </Content>
      </Wrapper>
    )
    :null
  }

MovieInfoBar.propTypes = {
  time: PropTypes.number,
  budget: PropTypes.number,
  revenue: PropTypes.number,
};

export default MovieInfoBar;
