import { useState, useEffect } from 'react';
import { Wrapper, NewsSectionHeader, ArticleWrapper, TitleWrapper, ContentWrapper } from './NewsSection.styles';
import Button from 'components/atoms/Button/Button';
import axios from 'axios';

// const data = [
//   {
//     title: 'New Spaniard in our school',
//     category: 'Sport news',
//     content: 'Elit sunt cillum qui labore eu duis adipisicing consectetur dolor aute ullamco dolore duis aliqua.',
//     image: null,
//   },
//   {
//     title: 'New Spaniard in our school2',
//     category: 'Sport news',
//     content: 'Elit sunt cillum qui labore eu duis adipisicing consectetur dolor aute ullamco dolore duis aliqua.',
//     image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Bandera_de_Espa%C3%B1a.svg/1920px-Bandera_de_Espa%C3%B1a.svg.png',
//   },
//   {
//     title: 'New Spaniard in our school3',
//     category: 'Sport news',
//     content: 'Elit sunt cillum qui labore eu duis adipisicing consectetur dolor aute ullamco dolore duis aliqua.',
//     image: null,
//   },
//   {
//     title: 'New Spaniard in our school4',
//     category: 'Sport news',
//     content: 'Elit sunt cillum qui labore eu duis adipisicing consectetur dolor aute ullamco dolore duis aliqua.',
//     image: null,
//   },
// ];

const API_TOKEN = 'fad97f295d62d1fcd6d179306fdfce';

const NewsSection = (props) => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .post(
        'https://graphql.datocms.com/',
        {
          query: `{
          allArticles{
            id
            title
            category
            content
            image {
              url
            }
          }
        }`,
        },
        {
          headers: {
            authorization: `Bearer ${process.env.REACT_APP_DATOCMS_TOKEN}`,
          },
        }
      )
      .then(({ data: { data } }) => {
        setArticles(data.allArticles);
      })
      .catch(() => setError("Sorry, we couldn't load articles for you"));
  });

  return (
    <Wrapper>
      <NewsSectionHeader>News feed section</NewsSectionHeader>
      {articles.length > 0 ? (
        articles.map(({ title, category, content, image = null }) => (
          <ArticleWrapper key={title}>
            <TitleWrapper>
              <h3>{title}</h3>
              <p>{category}</p>
            </TitleWrapper>
            <ContentWrapper>
              <p>{content}</p>
              {image ? <img src={image.url} alt="article" /> : null}
            </ContentWrapper>
            <Button isBig>Click me</Button>
          </ArticleWrapper>
        ))
      ) : (
        <NewsSectionHeader>{error ? error : 'Loading...'}</NewsSectionHeader>
      )}
    </Wrapper>
  );
};

export default NewsSection;
