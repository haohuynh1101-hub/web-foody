import React, { useEffect } from "react";
import "./Messenger.css";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import { useDispatch, useSelector } from "react-redux";
import { msgAddFailed } from "../../redux/action";
function Messenger(props) {
  const msgStatus = useSelector((state) => state.uiReducer.msgAddToCart);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(async () => {
      await dispatch(msgAddFailed());
    }, 6000);
  }, [msgStatus]);
  return (
    <div className="messenger">
      <Snackbar open={msgStatus} autoHideDuration={6000}>
        <Alert severity="success">Add product to cart success</Alert>
      </Snackbar>
    </div>
  );
}

export default Messenger;
