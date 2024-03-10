import { DNA } from "react-loader-spinner";

const Loader = () => {
  return (
    <div>
      <DNA
        visible={true}
        width="450"
        height="300"
        ariaLabel="dna-loading"
        animationDuration="0.75"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </div>
  );
};

export default Loader;
