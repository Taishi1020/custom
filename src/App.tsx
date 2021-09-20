import './css/App.css';
import { UserCard } from './components/UserCard';

const user = {
  id: 1,
  name: "たいし",
  email: "121345@aaa.com",
  address: "ADDRESS"
};

export default function App() {
  return(
    <div className="App">
      <UserCard user={user} />
    </div>
  );
}
