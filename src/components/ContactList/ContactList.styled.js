import styled from 'styled-components';

export const List = styled.ul`
  margin-bottom: ${p => p.theme.space[4]}px;
  display: flex;
  flex-direction: column;
  row-gap: ${p => p.theme.space[2]}px;
`;
