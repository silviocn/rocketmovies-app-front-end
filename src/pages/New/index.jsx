import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea';
import { NoteItem } from '../../components/NoteItem';
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';
import { Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi'; // importing icon used in new note button

import { useState } from 'react';
import { api } from '../../services/api';
import { useNavigate } from 'react-router-dom';

import { Container, Form } from './styles';

export function New() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [links, setLinks] = useState([]);
  const [newLink, setNewLink] = useState("");

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const navigate = useNavigate(); 

  function handleAddTag() {
    setTags(prevState => [...prevState, newTag]); // need to use spread operator because it's a list of items and not just one item independent 
    setNewTag("");
  }

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted ));
  }

  async function handleNewNote(){
    if(!title){
      return alert("Please create the Note Title");
    }
    
    if(newLink){
      return alert ("Are you sure you don't want to add de last link typed? Remember to click in 'add' button");
    }
    
    if(newTag){
      return alert ("Are you sure you don't want to add de last tag typed? Remember to click in 'add' button");
    }
    
    await api.post("/notes", {
      title,
      description,
      tags,
      links
    })

    alert("Note created successfully!");
    navigate(-1); // goes back to previous page
  }

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
            <Input placeholder="Title" onChange={e => setTitle(e.target.value)}/>
            <Input placeholder="Your note from 0 to 5"/>
          </div>

          <Textarea placeholder="Comments" onChange={e => setDescription(e.target.value)}/>


          <Section title="Markers">
            <div className='tags'>
            {
                tags.map((tag, index) => (
                <NoteItem 
                  key={String(index)}
                  value={tag} 
                  onClick={ () => handleRemoveTag(tag)}
                />
                ))

              }
              <NoteItem 
                isNew 
                placeholder="New tag"
                onChange={e => setNewTag(e.target.value)}
                value={newTag}
                onClick={handleAddTag}
                />
            </div>
          </Section>
       
          <div className='buttons'>
            <Button title="Delete Movie" />
            <Button title="Save" onClick={handleNewNote}/>
          </div>

        </Form>

      </main>
    </Container>
  );
}