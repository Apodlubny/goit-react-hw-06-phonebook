import styled from 'styled-components';

export const ContactListEl = styled.ul`
  min-width: 420px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  list-style: none;
  gap: 10px;
  padding: 0;
`;

export const ContactListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  border: 1px solid #bb8239;
  padding: 10px;
  text-align: center;
  border-radius: 5px;
  background-color: #81729c;
  box-shadow: -16px 19px 22px 7px rgba(73, 90, 181, 0.75);
`;

export const ContactItemHeader = styled.h2`
  margin: 0;
  margin-bottom: auto;
`;

export const ContactItemText = styled.p`
  margin: 0;
  font-weight: 600;
  color: #704a1a;
`;

export const ContactItemButton = styled.button`
  width: 100px;
  background-color: #bb8239;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  margin-top: auto;
  padding: 5px;
  :hover {
    box-shadow: -6px 16px 11px -9px rgba(31, 25, 25, 0.75);
  }
`;
