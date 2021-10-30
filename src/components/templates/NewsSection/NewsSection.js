import { useState, useEffect } from 'react';
import { Wrapper, NewsSectionHeader, ArticleWrapper, TitleWrapper, ContentWrapper } from './NewsSection.styles';
import Button from 'components/atoms/Button/Button';
import Loading from 'components/atoms/Loading/Loading';
import axios from 'axios';

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
        setTimeout(() => setArticles(data.allArticles), 1500);
      })
      .catch(() => setError("Sorry, we couldn't load articles for you"));
  }, []);

  return (
    <Wrapper>
      <NewsSectionHeader>News feed section</NewsSectionHeader>
      {articles.length > 0 ? (
        articles.map(({ id, title, category, content, image = null }) => (
          <ArticleWrapper key={id}>
            <TitleWrapper>
              <h3>{title}</h3>
              <p>{category}</p>
            </TitleWrapper>
            <ContentWrapper>
              <p>{content}</p>
              {image ? <img src={image.url} alt="article" /> : null}
            </ContentWrapper>
            <Button isBig withoutMarginBottom>
              Click me
            </Button>
          </ArticleWrapper>
        ))
      ) : error ? (
        <NewsSectionHeader> {error} </NewsSectionHeader>
      ) : (
        <Loading />
      )}
    </Wrapper>
  );
};

export default NewsSection;
