import BingoCard from '../components/BingoCard';

const Homepage: React.FC = () => {
  return (
    <>
      <header>
        <h1>Bingo Card Marker</h1>

        <button type="button">Manage Words</button>

        <label htmlFor="quantity" title="Amount of cards you want to generate">
          Amount:
        </label>

        <input type="number" min="1" placeholder="4" />
        <button type="button">Generate Cards</button>
      </header>

      <main>
        <BingoCard words={['foo', 'bar']} />
      </main>
    </>
  );
};

export default Homepage;
