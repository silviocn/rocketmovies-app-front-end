import { FiPlus } from 'react-icons/fi'; // importing icon used in new note button
import { Container, Content } from './styles';
import { Link } from 'react-router-dom';
import { Note } from './../../components/Note';
import { Header } from './../../components/Header';
import { Section } from './../../components/Section';

export function Home() {
  return (
    <Container>

      <Header />

      <Content>
        <div class='first_section'>
          <Section title="My Movies" />

            <Link id='Links' to="/new">
                <FiPlus />
                  Create Note
            </Link>   
        </div>
        
        <Section>
          <Note data={{
            title: 'Titanic',
            description: 'Very touching movie about a couple traveling from England to USA in this big ship called Titanic', 
            tags: [
              {id: '1', name: 'Science fiction'},
              {id: '2', name: 'Drama'},
              {id: '3', name: 'Family'}
            ] 
            }}
            />
        </Section>
      </Content>
    
    
    </Container>
  );
}