import React from 'react';
import { Card } from 'react-bootstrap';
import { Icon } from '@iconify/react';

interface InfoCardProps{
    title: string;
    value: string;
    rowOf: number;
}

const InfoCard: React.FC<InfoCardProps> = ({title, value, rowOf}: InfoCardProps) => {
  return (
    <Card style={{ width: '18rem' }} className={`${rowOf === 3 ? 'rowOf3' : 'rowOf4'} info-card`}>
      <Card.Body>
            <div className="info-content">
                <div className="key">{title}</div>
                <div className="value">{value}</div>
            </div>
            <div className="info-icon">
                <Icon icon="iconamoon:star-fill" />
            </div>
      </Card.Body>
    </Card>
  )
}

export default InfoCard
