import GridItem from '../components/GridItem';

interface BingoCardProps {
  words: string[];
  forPrint?: boolean;
}

const BingoCard: React.FC<BingoCardProps> = ({ words, forPrint }) => {
  const renderedGrid = words.map((word, index) => {
    return <GridItem word={word} key={index} />;
  });

  let cardClass = 'bingo-card';
  let title = (
    <input
      type="text"
      className="card-title"
      id="card-title"
      aria-labelledby="card-title"
      value="Baby Shower Bingo"
    />
  );

  if (forPrint) {
    cardClass += ' bingo-card--print';
    title = <div className="card-title">Baby Shower Bingo</div>;
  }

  return (
    <div className={cardClass}>
      {title}
      <div className="bingo-grid">{renderedGrid}</div>
    </div>
  );
};

export default BingoCard;
