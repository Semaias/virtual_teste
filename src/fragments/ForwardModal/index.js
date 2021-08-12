import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

import SelectorForward from '../ForwardSelector';
import ButtonFModal    from '../ButtonFModal';

import "./styles.scss";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: "16px",
    display: 'flex',
    justifyContent: 'center',
    flexDirection: "column",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

export default function TransitionsModal( {icon} ) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
      <div >
      <button className="style__button" type="button" onClick={handleOpen}>
        {icon}
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        // disableBackdropClick
        className="container"
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
        >
        <Fade in={open}>
          <div className={classes.paper} >
            <h2 className="modal--h2" id="transition-modal-title">Encaminhar</h2>
              <p className="modal--p">
                Selecione o operador que deseja transferir essa conversa:
              </p>
            <div className="container-content">
              <SelectorForward />
              <ButtonFModal
                text="Confirmar"
                className="modal__button--confirm"
              />
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}