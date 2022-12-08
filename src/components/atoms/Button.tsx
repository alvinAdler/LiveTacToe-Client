import styled from 'styled-components'

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: rgb(var(--color-accent));
  color: var(--color-light);
  border-radius: 8px;
  transition: 150ms all ease-in-out;
  border: 3px solid transparent;
  font-weight: 700;
  outline: none;

  &:hover, &:focus{
    background-color: rgb(var(--color-accent), 0.7);
    border-color: rgb(var(--color-accent))
  }
`

export default Button