import styled, {css} from 'styled-components';

const Button = styled.button`
${props=>
  props.color && css`
  background-color: ${props=>props.length > 2 ? props.theme[props.color]: props.length < 2? 'red' : 'pink'};
  color: ${props=>props.length<2 ? 'white': 'black'};  
  `
}
  border: none;
  font-weight: ${props=>props.length<2 ? 'bold': 'normal'};
  padding: 5px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
`;

export default Button