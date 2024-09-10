import BingoCard from '../components/BingoCard';

interface PrintProps {
  amount: number;
}

const Print: React.FC<PrintProps> = ({ amount }) => {
  const renderedCards = [];
  for (let i = 0; i < amount; i++) {
    renderedCards.push(
      <BingoCard words={['foo', 'bar']} forPrint={true} key={i} />
    );
  }

  return <>{renderedCards}</>;
};

export default Print;
