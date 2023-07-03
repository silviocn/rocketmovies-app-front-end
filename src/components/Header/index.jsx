import { Container, Profile, Search, Brand } from './styles';
import { Input } from './../../components/Input';

export function Header() {
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
          <strong>Silvio Neto</strong>
          <span>Logout</span>
        </div>

        <img
          src="https://github.com/silviocn.png"
          alt="User profile image"
          />

      </Profile>
  

    </Container>
  )
}