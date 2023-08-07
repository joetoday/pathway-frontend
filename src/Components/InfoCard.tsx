import React from 'react';
import { Card } from 'react-bootstrap';
import { Icon } from '@iconify/react';

interface InfoCardProps{
    title: string;
    value: string;
}

const InfoCard: React.FC<InfoCardProps> = ({title, value}: InfoCardProps) => {
  return (
    <Card style={{ width: '18rem' }} className='info-card'>
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
