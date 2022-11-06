import styled from 'styled-components';

export const FilterWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const FilterInput = styled.input`
  font-size: 16px;
  width: 250px;
  height: 20px;
  margin-bottom: 15px;
  padding: 5px;
  border-radius: 5px;
  outline-color: #704a1a;
  border-color: #bb8239;
  font-weight: 700;
`;

export const FilterLabel = styled.label`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 5px;
  color: #704a1a;
`;
