import React            from "react";
import { makeStyles }   from "@material-ui/core/styles";
import Accordion        from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography       from "@material-ui/core/Typography";
import ExpandMoreIcon   from "@material-ui/icons/ExpandMore";

import ButtonCardSideBar from "../ButtonCardSideBar";
import ButtonSidebar from "../ButtonSidebar";

import './styles.scss'

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  }
}));

export default function ControlledAccordions() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <Accordion
        className="acordium__style"
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          // expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        > 
          <p className="acordium__center">
            <Typography className={classes.heading}>
              <ButtonCardSideBar className="bo-dormir" name="Ana Maria" icon="(;_;)" />
            </Typography>
            <br />
            <Typography className={classes.heading}>
              <ButtonCardSideBar className="bo-dormir" name="Ana Maria" icon="(;_;)" />
            </Typography>
            <br />
            <Typography className={classes.heading}>
              <ButtonCardSideBar className="bo-dormir" name="Ana Maria" icon="(;_;)" />
            </Typography>
            <br />
            <Typography className={classes.heading}>
              <ButtonCardSideBar className="bo-dormir" name="Ana Maria" icon="(;_;)" />
            </Typography>
            <br />
            <Typography className={classes.heading}>
              <ButtonCardSideBar className="bo-dormir" name="Ana Maria" icon="(;_;)" />
            </Typography>
            <br />
            <ExpandMoreIcon />
          </p>
        </AccordionSummary>
        <AccordionDetails>
            <p>
              <Typography className={classes.heading}>
                <ButtonCardSideBar className="bo-dormir" name="Ana Maria" icon="(;_;)" />
              </Typography>
              <br />
              <Typography className={classes.heading}>
              <ButtonCardSideBar className="bo-dormir" name="Ana Maria" icon="(;_;)" />
            </Typography>
            <br />
            <Typography className={classes.heading}>
              <ButtonCardSideBar className="bo-dormir" name="Ana Maria" icon="(;_;)" />
            </Typography>
            <br />
            </p>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
