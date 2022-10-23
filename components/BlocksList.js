import styled from "styled-components";
import Button from "./Button";
import TextInput from "./TextInput";

const BlockWrapper = styled.div`
  color: rgb(33, 43, 54);
  box-shadow: rgb(145 158 171 / 20%) 0px 0px 2px 0px,
    rgb(145 158 171 / 12%) 0px 12px 24px -4px;
  border-radius: 16px;
  padding: 24px;
  margin-bottom: 12px;
  display: flex;
  justify-content: space-between;
`;

const BlocksList = ({
  blocks,
  editing,
  setEditing,
  onSubmitEdits,
  deleteBlock,
}) => {
  return (
    <div className="DataOutput">
      {blocks
        .sort((a, b) => b.height - a.height)
        .map((block) => (
          <div key={block._id}>
            {editing !== block._id ? (
              <BlockWrapper key={block._id}>
                <div>
                  <div>
                    <div>
                      <span>Height:</span>
                      {block.height}
                    </div>
                    <div>
                      <span>Builder:</span>
                      {block.builder}
                    </div>
                    <div>
                      <span>Twitter URL:</span>
                      {block.twitterURL}
                    </div>
                  </div>
                  <div style={{ display: "flex" }}>
                    <Button onClick={() => setEditing(block._id)}>Edit</Button>
                    <Button onClick={() => deleteBlock(block._id)}>
                      Delete
                    </Button>
                  </div>
                </div>

                <div>
                  <Button variation="primary">Build on this block</Button>
                </div>
              </BlockWrapper>
            ) : (
              <BlockWrapper key={block._id} className="DataOutput__editing">
                <form onSubmit={(e) => onSubmitEdits(e, block._id)}>
                  <div className="DataOutput__editing--option">
                    <TextInput
                      type="text"
                      name="height"
                      labelText="Height"
                      defaultValue={block.height}
                    />
                  </div>
                  <div className="DataOutput__editing--option">
                    <TextInput
                      type="text"
                      name="builder"
                      labelText="Builder"
                      defaultValue={block.builder}
                    />
                  </div>
                  <div className="DataOutput__editing--option">
                    <TextInput
                      type="text"
                      name="twitterURL"
                      labelText="Twitter URL"
                      defaultValue={block.twitterURL}
                    />
                  </div>
                  <div style={{ display: "flex" }}>
                    <Button type="Submit">Submit</Button>
                    <Button
                      className="DataOutput__editing--cancel"
                      onClick={() => setEditing(null)}
                    >
                      Cancel
                    </Button>
                  </div>
                </form>
                <div></div>
              </BlockWrapper>
            )}
          </div>
        ))}
    </div>
  );
};

export default BlocksList;
