import Button from "../components/Button";
import TextInput from "../components/TextInput";

import styled from "styled-components";

const CreateBlockWrapper = styled.div`
  box-shadow: rgb(145 158 171 / 20%) 0px 0px 2px 0px,
    rgb(145 158 171 / 12%) 0px 12px 24px -4px;
  border-radius: 16px;
  padding: 24px;
  margin: 24px;
`;

const CreateBlock = ({
  onSubmitBlock,
  blockData,
  setBlockData,
  proofs,
  setProofs,
}) => {
  return (
    <CreateBlockWrapper>
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
              <div style={{ display: "flex", marginBottom: "8px" }} key={index}>
                <div
                  style={{
                    display: "flex",
                    marginRight: "8px",
                    alignItems: "center",
                  }}
                >
                  {index + 1}.
                </div>
                <TextInput
                  type="text"
                  name="amount"
                  showLabel={false}
                  onChange={(e) => {
                    const updatedProofs = [...proofs];
                    updatedProofs[index].amount = e.target.value;
                    setProofs(updatedProofs);
                  }}
                  value={proofs[index].amount}
                />
                <TextInput
                  type="text"
                  name="twitterURL"
                  showLabel={false}
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
    </CreateBlockWrapper>
  );
};

export default CreateBlock;
