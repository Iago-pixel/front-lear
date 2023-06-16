import Circle from "react-circle";
import { theme } from "../../styles/global";
import { Container } from "./style";
import { useEffect, useState } from "react";

export const PercentageBox = ({
  percentage_complete,
  size,
  children,
  fontSize = "1rem",
  ...rest
}) => {
  const [percentege, setPercentage] = useState(0);

  useEffect(() => {
    setPercentage(percentage_complete);
  }, [percentage_complete]);

  return (
    <Container fontSize={fontSize} {...rest}>
      <Circle
        progress={percentege}
        size={size}
        progressColor={theme.percentageCircle.progressColor}
        bgColor={theme.percentageCircle.bgColor}
        textColor={theme.percentageCircle.textColor}
        roundedStroke={true}
        animate={true}
        animationDuration="2s"
      />
      <p className="title">{children}</p>
    </Container>
  );
};
