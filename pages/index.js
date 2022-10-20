import Head from "next/head";
import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [blocks, setBlocks] = useState([]);
  const [editing, setEditing] = useState(null);

  useEffect(() => {
    getBlocks();
  }, []);

  // Create
  const onSubmitBlock = async (e) => {
    e.preventDefault();
    const { height, builder, twitterURL } = e.target;
    await axios.post("/api/blocks", {
      height: height.value,
      builder: builder.value,
      twitterURL: twitterURL.value,
    });
    height.value = "";
    builder.value = "";
    twitterURL.value = "";
    getBlocks();
  };

  // Read
  const getBlocks = async () => {
    const res = await axios.get("/api/blocks");
    const data = res.data;
    setBlocks(data);
  };

  // Update
  const onSubmitEdits = async (e, id) => {
    e.preventDefault();
    const { height, builder, twitterURL } = e.target;
    await axios.post(`/api/blocks/update/${id}`, {
      height: height.value,
      builder: builder.value,
      twitterURL: twitterURL.value,
    });
    setEditing(null);
    getBlocks();
  };

  // Delete
  const deleteBlock = async (blockToDelete) => {
    await axios({
      method: "DELETE",
      url: "/api/blocks/",
      data: {
        id: blockToDelete,
      },
    });
    await getBlocks();
  };

  return (
    <div className="App container">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="DataInput">
        <h2>Enter block:</h2>
        <form onSubmit={(e) => onSubmitBlock(e)}>
          <label htmlFor="height">Height:</label>
          <input type="text" name="height" />
          <label htmlFor="builder">Builder:</label>
          <input type="text" name="builder" />
          <label htmlFor="twitterURL">Twitter URL:</label>
          <input type="text" name="twitterURL" />
          <button>Add Block</button>
        </form>
      </div>
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
    </div>
  );
}
