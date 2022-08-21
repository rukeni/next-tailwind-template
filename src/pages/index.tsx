import type { NextPage } from 'next';
import Button from 'src/features/Button';

const Home: NextPage = () => {
  return (
    <h1 className='my-4 text-center text-4xl font-bold'>
      Home
      <Button label='Submit' />
    </h1>
  );
};

export default Home;
