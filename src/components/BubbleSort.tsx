import styled from 'styled-components';
import { useEffect, useState } from 'react';

const ButtonStyled = styled.button`
  margin-bottom: 20px;
  margin-right: 20px;
  background-color: ${({ disabled }): string =>
    disabled ? '#CCCCCC' : '#4CAF50'};
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: ${({ disabled }): string => (disabled ? 'auto' : 'pointer')};
`;

type BarStyledProps = {
  $length: number;
};

const BarStyled = styled.div<BarStyledProps>`
  width: ${({ $length }): number => $length}px;
  height: 5px;
  background-color: cadetblue;
`;

const shuffle = (arr: number[]) => {
  arr.sort(() => Math.random() - 0.5);
};

const BubbleSort = () => {
  const [lengths, setLengths] = useState<number[]>([]);
  const [sorting, setSorting] = useState(false);

  useEffect(() => {
    const lengths = [];
    for (let i = 0; i < 100; i++) {
      lengths.push((i + 1) * 5);
    }
    shuffle(lengths);
    setLengths([...lengths]);
  }, []);

  const reset = () => {
    shuffle(lengths);
    setLengths([...lengths]);
  };

  const swap = (a: number, b: number) =>
    new Promise<boolean>(resolve =>
      setTimeout(() => {
        const tmp = lengths[a];
        lengths[a] = lengths[b];
        lengths[b] = tmp;
        setLengths([...lengths]);
        resolve(true);
      }, 0),
    );

  const bubbleSort = async () => {
    let changed = false;
    setSorting(true);
    do {
      changed = false;
      for (let i = 0; i < lengths.length - 1; i++) {
        if (lengths[i] > lengths[i + 1]) {
          changed = await swap(i, i + 1);
        }
      }
    } while (changed);
    setSorting(false);
  };

  return (
    <div>
      <ButtonStyled onClick={() => bubbleSort()} disabled={sorting}>
        Bubble Sort
      </ButtonStyled>
      <ButtonStyled onClick={() => reset()} disabled={sorting}>
        Reset
      </ButtonStyled>
      {lengths.map((length: number) => (
        <BarStyled key={length} $length={length} />
      ))}
    </div>
  );
};

export default BubbleSort;
