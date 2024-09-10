interface GridItemProps {
  word: string;
}

const GridItem: React.FC<GridItemProps> = ({ word }) => {
  return (
    <>
      <div className="grid-item">{word}</div>
    </>
  );
};

export default GridItem;
