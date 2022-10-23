const BlocksList = ({
  blocks,
  editing,
  setEditing,
  onSubmitEdits,
  deleteBlock,
}) => {
  return (
    <div className="DataOutput">
      {blocks.map((block) => (
        <div key={block._id}>
          {editing !== block._id ? (
            <div key={block._id} className="DataOutput__card">
              <div className="DataOutput__card--details">
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
              <div className="DataOutput__card--options">
                <button onClick={() => setEditing(block._id)}>Edit</button>
                <button onClick={() => deleteBlock(block._id)}>Delete</button>
              </div>
            </div>
          ) : (
            <div key={block._id} className="DataOutput__editing">
              <form onSubmit={(e) => onSubmitEdits(e, block._id)}>
                <div className="DataOutput__editing--option">
                  <label htmlFor="height">Height:</label>
                  <input
                    type="text"
                    name="height"
                    defaultValue={block.height}
                  />
                  b
                </div>
                <div className="DataOutput__editing--option">
                  <label htmlFor="builder">Builder:</label>
                  <input
                    type="text"
                    name="builder"
                    defaultValue={block.builder}
                  />
                </div>
                <div className="DataOutput__editing--option">
                  <label htmlFor="twitterURL">TwitterURL:</label>
                  <input
                    type="text"
                    name="twitterURL"
                    defaultValue={block.twitterURL}
                  />
                </div>
                <div>
                  <button type="Submit">Submit</button>
                  <button
                    className="DataOutput__editing--cancel"
                    onClick={() => setEditing(null)}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default BlocksList;
