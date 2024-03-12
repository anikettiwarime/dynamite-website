import PropTypes from "prop-types";

const CircularSpot = ({ position }) => {
  return (
    <div className="relative w-full">
      <div
        className={`absolute top-20 w-72 h-72 bg-[#F75049] rounded-full filter blur-3xl contrast-150 opacity-25 ${
          position === "left" ? "left-0" : "right-0"
        } z-[2]`}
      />
    </div>
  );
};

CircularSpot.propTypes = {
  position: PropTypes.oneOf(["left", "right"]),
};

export default CircularSpot;
