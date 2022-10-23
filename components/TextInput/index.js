import React from "react";
import styled from "styled-components";

const TextInputStyles = styled.div`
  display: flex;
  flex-direction: column;

  & label {
    color: #323233;
    display: block;
    font-size: 13px;
    font-weight: 800;
    line-height: 16px;
    padding-bottom: 8px;
    transform-origin: top left;
  }
  & input {
    color: #323233;
    font-size: 15px;
    line-height: 18px;
    height: 40px;
    border-radius: 4px;
    border: 1px solid #ccc;
    padding: 0 12px;
  }
`;

const TextInput = ({ type, onChange, value, labelText = "hello", id }) => {
  return (
    <TextInputStyles>
      <label>{labelText}</label>
      <input type={type} onChange={onChange} value={value} id={id} />
    </TextInputStyles>
  );
};
export default TextInput;
