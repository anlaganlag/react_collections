import { makeStyles } from "@material-ui/core/styles";
import {
  StyledDiv,
  StyledCancelIcon,
  StyledHeader2,
  StyledEmoji,
  StyledParagraph,
  StyledDiv2,
} from "./FormFiltersStyled";
import CancelIcon from "@material-ui/icons/Cancel";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    margin: theme.spacing(3),
    flexGrow: "1",
  },
}));

function FormFilters({ setShowFilters, params, updateParams, pending }) {
  const classes = useStyles();
  return (
    <StyledDiv>
      <IconButton
        size="small"
        aria-label="Close filters"
        onClick={() => setShowFilters(false)}
        style={{ position: "absolute", top: "16px", right: "19px" }}
      >
        <StyledCancelIcon fontSize="small" />
      </IconButton>
      <div>
        <StyledHeader2>
          Pick a date (any date) since 2008 <StyledEmoji>😅</StyledEmoji>
        </StyledHeader2>
        <StyledParagraph>
          See how people expressed themselves on twitter back when...
        </StyledParagraph>
      </div>
      <StyledDiv2>
        <TextField
          id="dateFrom"
          label="From"
          name="from"
          type="date"
          disabled={pending}
          className={classes.textField}
          InputLabelProps={{ shrink: true }}
          value={params.from || ""}
          onChange={(e) => updateParams({ from: e.target.value })}
        />
        <TextField
          id="dateTill"
          label="Until"
          name="until"
          type="date"
          disabled={pending}
          className={classes.textField}
          InputLabelProps={{ shrink: true }}
          value={params.until || ""}
          onChange={(e) => updateParams({ until: e.target.value })}
        />
      </StyledDiv2>
    </StyledDiv>
  );
}

export default FormFilters;
