import { Container, Profile, Search, Brand } from './styles';
import { Input } from './../../components/Input';
import avatarPlaceholder from '../../assets/avatar_placeholder.svg';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';

export function Header() {
  const { signOut, user } = useAuth();
  const navigation = useNavigate();
  
  function handleSignOut() {
    navigation("/");
    signOut();
  }
    
  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  return (
    <Container>
      <Brand>
        <h1>RocketMovies</h1>
      </Brand>
        
      <Search>
        <Input placeholder="Search by title"  />
      </Search>

      <Profile to="/profile">
        <div>
          <strong>{user.name}</strong>
          <span onClick={handleSignOut}>Logout </span>
        </div>

        <img
          src={avatarURL}
          alt={user.name}
          />

      </Profile>
  

    </Container>
  )
}