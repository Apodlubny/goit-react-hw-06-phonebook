import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const FormEl = styled(Form)`
  display: flex;
  min-width: 420px;
  align-items: center;
  flex-direction: column;
  background-color: #81729c;
  border-radius: 5px;
  box-shadow: -16px 19px 22px 7px rgba(73, 90, 181, 0.75);
`;

export const InputEl = styled(Field)`
  font-size: 16px;
  width: 300px;
  height: 30px;
  margin-bottom: 15px;
  padding: 5px;
  border-radius: 5px;
  outline-color: #704a1a;
  border-color: #bb8239;
  font-weight: 700;
`;

export const Label = styled.label`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 5px;
  color: #292520;
`;

export const SubmitButton = styled.button`
  width: 150px;
  height: 40px;
  background-color: #bb8239;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  outline-color: #bb8239;
  margin-bottom: 10px;
  :hover {
    box-shadow: -6px 16px 11px -9px rgba(31, 25, 25, 0.75);
  }
`;

export const Error = styled(ErrorMessage)`
  width: 300px;
  text-align: center;
  color: #bf0a32eb;
  margin-bottom: 15px;
  font-weight: 500;
  font-size: 16px;
`;
