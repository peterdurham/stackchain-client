const CreateBlock = () => {
  return (
    <div
      style={{ border: "1px solid grey", borderRadius: "4px", padding: "20px" }}
    >
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          width: "300px",
          margin: "0 auto",
        }}
      >
        <h2>Enter block:</h2>
        {/* <form onSubmit={(e) => onSubmitBlock(e)}> */}
        <label htmlFor="height">Height:</label>
        <input type="text" name="height" />
        <label htmlFor="parent">Parent:</label>
        <input type="text" name="parent" />
        <label htmlFor="builder">Builder:</label>
        <input type="text" name="builder" />
        <label htmlFor="twitterURL">Twitter URL:</label>
        <input type="text" name="twitterURL" />
        <button>Add Block</button>
      </form>
    </div>
  );
};

export default CreateBlock;
