import { Box } from '@mui/material';
import styled from 'styled-components';

export const TodoSectionStyled = styled(Box)`
  background-color: #2d2d2d;
  border-radius: 10px;
  padding: 30px;
  min-width: 1004px;
`;

export const TaskListStyled = styled('ul')`
  display: flex;
  flex-direction: column;
  width: 100%;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 10px;
  font-size: 20px;
`;
