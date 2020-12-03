import React from "react";
import { Divider } from "semantic-ui-react";
import GoBackButton from "../../GoBackButton";
import Submit from "./Submit";

const ButtonsGroup = ({
  submitProps,
  handleSubmit,
  onSubmit,
  onClose,
  isCancelable,
  withoutModal,
}) => (
  <div className="fluid">
    <Submit
      submitProps={submitProps}
      onSubmit={onSubmit}
      handleSubmit={handleSubmit}
      withoutModal={withoutModal}
    />
    {isCancelable && (
      <>
        <Divider hidden />
        <GoBackButton onClose={onClose} />
      </>
    )}
  </div>
);

export default ButtonsGroup;
