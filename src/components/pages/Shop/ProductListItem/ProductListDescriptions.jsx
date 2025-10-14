const ProductListDescriptions = ({ descriptions }) => {
  return (
    <div>
      {descriptions.map((d, index) => (
        <p key={index} className="">
          {d}
        </p>
      ))}
    </div>
  );
};

export default ProductListDescriptions;
