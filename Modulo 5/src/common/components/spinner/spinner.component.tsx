import React from 'react';
import { usePromiseTracker } from 'react-promise-tracker';
import Modal from '@material-ui/core/Modal';
import Loader from 'react-spinners/ScaleLoader';
import * as classes from './spinner.styles';

export const SpinnerComponent: React.FunctionComponent = () => {
  const { promiseInProgress } = usePromiseTracker();
  return (
    <Modal open={promiseInProgress} className={classes.modal}>
      <div data-testid="modal-body" className={classes.loaderContainer}>
        <Loader />
      </div>
    </Modal>
  );
};
