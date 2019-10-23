import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const MissionCardBlock = styled.div`
  margin: 36px;
  width: 33.3333%;

  img {
    width: 80%;
  }

  .description {
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 24px;
  }
`;

function MissionCard({ img, description, color, onClick }) {
  return (
    <MissionCardBlock>
      <img src={img} alt={description} />
      <div
        className="description"
        dangerouslySetInnerHTML={{ __html: description }}
      ></div>
      <Button color={color}>미션 참여하기</Button>
    </MissionCardBlock>
  );
}
export default MissionCard;
