import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";

const useStyles = makeStyles((theme) => ({
  formControl: {
    marginBottom: theme.spacing(2),
    width: '300px !important',
  },
  selectEmpty: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  }
}));

export default function NativeSelects() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    forward: "",
    name: "himark"
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value
    });
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <NativeSelect
          className={classes.selectEmpty}
          value={state.forward}
          name="forward"
          onChange={handleChange}
          inputProps={{ "aria-label": "forward" }}
        >
          <option value="" disabled>
            Selecione
          </option>
          <option value={10}>Arroz</option>
          <option value={20}>Feijão</option>
          <option value={30}>Batata</option>
        </NativeSelect>
      </FormControl>
    </div>
  );
}
