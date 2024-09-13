import Image from "./Image";
import Title from "./Title";
import Description from "./Description";
import Button from "./Button";

const Card = ({ source, title, des, btn, btn2 }) => {
  return (
    <div className="container">
      <div className="card">
      <Image source={source} />
      <Title title={title}/>
      <Description des={des} />
      <Button btn={btn} btn2={btn2} />
    </div>
    
    </div>
  );
};

export default Card;
