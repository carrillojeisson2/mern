import { Link } from "react-router-dom";

const Slider = (props) => {
  const { titulo, btn, size } = props;
  return (
    <div id="slider" className={size}>
      <h1>{titulo}</h1>

      {btn && (
        <Link to={"/blog"} className="btn-white">
          {btn}
        </Link>
      )}
    </div>
  );
};

export default Slider;
