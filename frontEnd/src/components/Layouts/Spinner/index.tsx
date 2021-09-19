import React from "react";
import { Spinner } from "react-bootstrap";
import Classes from "./style.module.scss";

interface ComponentProps {
  animation: "grow" | "border";
  variant: "primary" | "info" | "danger" | "success" | "warning";
  size?: "sm" | undefined;
}

const SpinnerLoader: React.FC<ComponentProps> = (props: ComponentProps) => {
  const { animation, variant, size } = props;
  return (
    <div className={Classes.spinnerWrapper}>
      <Spinner
        animation={animation}
        role="status"
        variant={variant}
        size={size}
      >
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
};

export default SpinnerLoader;
