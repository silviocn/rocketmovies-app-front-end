import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea';
import { NoteItem } from '../../components/NoteItem';
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';
import { Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi'; // importing icon used in new note button

import { Container, Form } from './styles';

export function New() {
  return (
    <Container>
      <Header/>

      <main>
        <Form>
          <header>
            <Link to="/"><BiArrowBack /> Go back</Link>
            <h1>New Movie</h1>
          </header>
          
          <div class="title_note">
            <Input placeholder="Title"/>
            <Input placeholder="Your note from 0 to 5"/>
          </div>

          <Textarea placeholder="Comments"/>


          <Section title="Markers">
            <div className='tags'>
              <NoteItem value="React" />
              <NoteItem isNew placeholder="New tag"/>
            </div>
          </Section>
       
          <div className='buttons'>
            <Button title="Delete Movie" />
            <Button title="Save" />
          </div>

        </Form>

      </main>
    </Container>
  );
}