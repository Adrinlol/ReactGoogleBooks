import styled from "styled-components";
import { Col } from "antd";

export const Container = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  margin-right: auto;
  margin-left: auto;
  background: #f0f1f3;
  max-width: 1050px;
`;

export const Margin = styled.div`
  margin-top: 2rem;
`;

export const Background = styled.div`
  background: #f0f1f3;
`;

export const Text = styled.h4`
  font-size: 1.2rem;
  color: rgba(43, 57, 144, 1);
`;

export const MCol = styled(Col)`
  margin-bottom: 2rem;
`;
