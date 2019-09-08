import styled from 'styled-components';

export default styled.button`
  margin-bottom: 20px;
  margin-right: 20px;
  background-color: ${props => (props.disabled ? '#CCCCCC' : '#4CAF50')};
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: ${props => (props.disabled ? 'auto' : 'pointer')};
`;
