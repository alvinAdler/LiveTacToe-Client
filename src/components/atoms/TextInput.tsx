import styled from 'styled-components'

const TextInput = styled.input`
  padding: 0.5rem 1rem;
  border: 1px solid rgb(var(--color-secondary));
  border-radius: 8px;
  transition: 150ms all ease-in-out;
  outline: none;

  &:focus{
    border-color: rgb(var(--color-accent));
  }
`

export default TextInput