
import Container from './../../Components/Container';
import TaskFrom from './TaskFrom';
const Home = () => {
  return (
    <div className='mt-10'>
      <Container>
        <div className='flex gap-10 items-center '>
          <button className='btn btn-primary'>All Task</button>
          <button className='btn btn-neutral'>To Do</button>
          <button className='btn btn-secondary'>On Going</button>
          <button className='btn btn-accent'>Complete</button>
        </div>
        <TaskFrom></TaskFrom>
      </Container>
    </div>
  );
};

export default Home;

