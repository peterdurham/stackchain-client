import Button from "../components/Button";
import TextInput from "../components/TextInput";

const CreateBlock = ({
  onSubmitBlock,
  blockData,
  setBlockData,
  proofs,
  setProofs,
}) => {
  return (
    <div
      style={{
        border: "1px solid grey",
        borderRadius: "4px",
        padding: "20px",
      }}
    >
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          width: "300px",
          margin: "0 auto",
        }}
        onSubmit={(e) => onSubmitBlock(e)}
      >
        <h2>Enter block:</h2>

        <TextInput
          type="text"
          name="height"
          labelText="Height"
          value={blockData.height}
          onChange={(e) =>
            setBlockData({
              ...blockData,
              height: e.target.value,
            })
          }
        />
        <TextInput
          type="text"
          name="parent"
          labelText="Parent"
          value={blockData.parent}
          onChange={(e) =>
            setBlockData({
              ...blockData,
              parent: e.target.value,
            })
          }
        />
        <TextInput
          type="text"
          name="twitterURL"
          labelText="Twitter URL"
          value={blockData.twitterURL}
          onChange={(e) =>
            setBlockData({
              ...blockData,
              twitterURL: e.target.value,
            })
          }
        />
        <h2>Proofs:</h2>
        <div>
          {proofs.map((proof, index) => {
            return (
              <div style={{ display: "flex" }} key={index}>
                <span>{index + 1}</span>
                <input
                  type="text"
                  name="amount"
                  onChange={(e) => {
                    const updatedProofs = [...proofs];
                    updatedProofs[index].amount = e.target.value;
                    setProofs(updatedProofs);
                  }}
                  value={proofs[index].amount}
                />
                <input
                  type="text"
                  name="twitterURL"
                  onChange={(e) => {
                    const updatedProofs = [...proofs];
                    updatedProofs[index].twitterURL = e.target.value;
                    updatedProofs[index].miner =
                      e?.target?.value?.split("/")[3] || "";
                    setProofs(updatedProofs);
                  }}
                  value={proofs[index].twitterURL}
                />
                {index === proofs.length - 1 && (
                  <Button
                    onClick={() =>
                      setProofs([...proofs, { amount: "", twitterURL: "" }])
                    }
                  >
                    +
                  </Button>
                )}
              </div>
            );
          })}
        </div>
        <Button variation="primary">Add Block</Button>
      </form>
    </div>
  );
};

export default CreateBlock;
