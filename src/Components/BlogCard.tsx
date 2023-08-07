import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

interface BlogCardProps{
    title: string;
    text: string;
    img: string;
    link: string;
    author: string;
    date: string;
}

const BlogCard: React.FC<BlogCardProps> = ({title, text, img, link, author, date}: BlogCardProps) => {
    const navigate = useNavigate();

    const handleClick = () => navigate(link);

  return (
    <Card style={{ width: '18rem' }} className='blog-card'>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Card.Text className='card-foot-text'>{date}・{author}</Card.Text>
        <Button variant="primary" className='blog-card-btn' onClick={handleClick}>Read More</Button>
      </Card.Body>
    </Card>
  )
}

export default BlogCard
