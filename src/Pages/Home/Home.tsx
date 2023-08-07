import React from 'react';
import Frame from '../../Components/Frame';
import { Button, Container } from 'react-bootstrap';
import BlogCard from '../../Components/BlogCard';
import TweetCard from '../../Components/TweetCard';
import CustomAccordion from '../../Components/CustomAccordion';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <Frame title='Home'>
      <Container>
        <div className="landing">
          <div className="elipse"></div>
          <div className="landing-content">
            <div className="title">Pathway Finance</div>
            <div className="sub-title">The path to crypto investing.</div>
            <div className="landing-btn">
              <Button variant='secondary' onClick={() => navigate("/vaults")}>Launch App</Button>
            </div>
          </div>
        </div>
        <div className="latest-blog">
          <div className="header">Latest Blog Posts</div>
          <div className="blog-cards">
            <BlogCard 
              img='./assets/images/blog1.png'
              title='Blog title'
              text='Lörem ipsum plavis ryk nys, tytt fast trädmord de teler att vaskade anar fast sorat bön trenat. Berade proprende manimirar mynade för attewrweqwrrwe...'
              date='13/07/2023'
              author='User Name'
              link='/'
            />
            <BlogCard 
              img='./assets/images/blog2.png'
              title='Blog title'
              text='Lörem ipsum plavis ryk nys, tytt fast trädmord de teler att vaskade anar fast sorat bön trenat. Berade proprende manimirar mynade för attewrweqwrrwe...'
              date='13/07/2023'
              author='User Name'
              link='/'
            />
            <BlogCard 
              img='./assets/images/blog3.png'
              title='Blog title'
              text='Lörem ipsum plavis ryk nys, tytt fast trädmord de teler att vaskade anar fast sorat bön trenat. Berade proprende manimirar mynade för attewrweqwrrwe...'
              date='13/07/2023'
              author='User Name'
              link='/'
            />
          </div>
          
        </div>
        <div className="latest-tweets">
          <div className="header">Latest Twitter Posts</div>
          <div className="tweet-cards">
            <TweetCard 
              dp='./assets/images/user1.png'
              username='USER NAME'
              handle='ACCOUNT'
              tweet='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. consequat.'
              timestamp='12:30 PM'
              date='13/07/2023'
              device='Twitter Web App'
            />
            <TweetCard 
              dp='./assets/images/user2.png'
              username='USER NAME'
              handle='ACCOUNT'
              tweet='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. consequat.'
              timestamp='12:30 PM'
              date='13/07/2023'
              device='Twitter Web App'
            />
            <TweetCard 
              dp='./assets/images/user3.png'
              username='USER NAME'
              handle='ACCOUNT'
              tweet='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. consequat.'
              timestamp='12:30 PM'
              date='13/07/2023'
              device='Twitter For iPhone'
            />
          </div>
        </div>
        <div className="faqs">
          <div className="header">Frequently Asked Questions</div>
          <div className="accordion-section">
            <CustomAccordion />
          </div>
        </div>
      </Container>
    </Frame>
  )
}

export default Home
