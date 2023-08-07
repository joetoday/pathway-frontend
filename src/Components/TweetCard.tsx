import React from 'react';
import { Card } from 'react-bootstrap';
import { Icon } from '@iconify/react';


interface TweetCardProps{
    dp: string;
    username: string;
    handle: string;
    tweet: string;
    timestamp: string;
    date: string;
    device: string;
}

const TweetCard: React.FC<TweetCardProps> = ({dp, username, handle, tweet, timestamp, date, device }: TweetCardProps) => {

  return (
    <Card style={{ width: '18rem' }} className="twitter-card">
      <Card.Body>
        <Card.Text>
            <div className="user">
                <div className="dp">
                    <img src={dp} alt='user' />
                </div>
                <div className="user-info">
                    <div className="name-icon">
                        <div className="name">{username}</div>
                        <div className="icon">
                            <Icon icon="solar:verified-check-bold" />
                        </div>
                    </div>
                    <div className="handle">@{handle}</div>
                </div>
            </div>
            <div className="tweet">{tweet}</div>
            <div className="footer-info">
                <div className="user-timestamp">{timestamp} · {date}</div>
                <div className="seperator">·</div>
                <div className="device">{device}</div>
            </div>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}
export default TweetCard;