import { Box } from '@mui/material';
import styled from 'styled-components';

export const TaskItemStyled = styled('li')`
  background-color: antiquewhite;
  padding: 10px 15px;
  border-radius: 5px;
  list-style: none;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
`;

export const TaskLabelStyled = styled('label')`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  color: #2d2d2d;
`;

export const ButtonWrapperStyled = styled(Box)`
  display: flex;
  gap: 10px;
`;

export const TaskTextStyled = styled(Box)`
  display: flex;
  align-items: center;
  gap: 10px;
`;
