import { staggerContainer } from "@/utils/motion";
import { MotionDiv } from "./MotionElements";

const StaggerContainerMotion = ({ children }) => {
  return (
    <MotionDiv
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="w-full"
    >
      {children}
    </MotionDiv>
  );
};

export default StaggerContainerMotion;
