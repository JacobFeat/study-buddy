import { Wrapper, NewsSectionHeader, ArticleWrapper, TitleWrapper } from './NewsSection.styles';
import Button from 'components/atoms/Button/Button';

const data = [
  {
    title: 'New Spaniard in our school',
    category: 'Sport news',
    content: 'Elit sunt cillum qui labore eu duis adipisicing consectetur dolor aute ullamco dolore duis aliqua.',
    image: null,
  },
  {
    title: 'New Spaniard in our school2',
    category: 'Sport news',
    content: 'Elit sunt cillum qui labore eu duis adipisicing consectetur dolor aute ullamco dolore duis aliqua.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Bandera_de_Espa%C3%B1a.svg/1920px-Bandera_de_Espa%C3%B1a.svg.png',
  },
  {
    title: 'New Spaniard in our school3',
    category: 'Sport news',
    content: 'Elit sunt cillum qui labore eu duis adipisicing consectetur dolor aute ullamco dolore duis aliqua.',
    image: null,
  },
  {
    title: 'New Spaniard in our school4',
    category: 'Sport news',
    content: 'Elit sunt cillum qui labore eu duis adipisicing consectetur dolor aute ullamco dolore duis aliqua.',
    image: null,
  },
];

const NewsSection = (props) => {
  return (
    <Wrapper>
      <NewsSectionHeader>News feed section</NewsSectionHeader>
      {data.map(({ title, category, content, image = null }) => (
        <ArticleWrapper key={title}>
          <TitleWrapper>
            <h3>{title}</h3>
            <p>{category}</p>
          </TitleWrapper>
          <p>{content}</p>
          {image ? <img src={image} alt="article" /> : null}
          <Button isBig>Click me</Button>
        </ArticleWrapper>
      ))}
    </Wrapper>
  );
};

export default NewsSection;
