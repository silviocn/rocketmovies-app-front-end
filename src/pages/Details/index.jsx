// using the same name for the function and for the document to make easier do identify
// and every Component has to have the first letter as a Uppercase
import { Container, Content, Avatar, Links } from './styles';

import { FiArrowLeft, FiClock } from 'react-icons/fi';
import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { Tag } from '../../components/Tag';
import { Link } from 'react-router-dom';

import { useParams, useNavigate } from 'react-router-dom'; 
import { useState, useEffect } from 'react';
import { api } from '../../services/api';

export function Details() {
  const [data, setData] = useState(null);

  const params = useParams();
  const navigate = useNavigate();

  function handleBack() {
    navigate(-1); // goes back to the previous page
  }

  async function handleRemove() {
    const confirm = window.confirm("Are you sure you want to delete this note?") // confirm is a function of the browser
     // confirm returns true or false (OK or Cancel)
    if(confirm) {
      await api.delete(`/notes/${params.id}`);
      navigate(-1); // or could use handleBack();
    }

  }

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data);
    }

    fetchNote();
  }, [])

  return(
    <Container>
      <Header />
      
      data &&
      <main>
        <Content>
          
          <Links>
            <Link to="/"><FiArrowLeft /> Go back</Link>
          </Links>
          
          <header>
            <h1>{data.title}</h1>            
          </header>
          
          <div className='author'>
            <Avatar>
              <img 
              src="http://github.com/silviocn.png" 
              alt="User profile image" />

            </Avatar>
            
            <h3>By Silvio Costa</h3> <FiClock id='clock'/> <h3>23/05/22 às 8:00</h3>
          </div>

          {
              data.tags &&
              <Section title="Markers">
                {
                  data.tags.map(tag => (
                    <Tag 
                      key={String(tag.id)} 
                      title={tag.name} 
                    />
                  ))
                }
              </Section>
            }

          <p>
            {data.description}
          </p>

        </Content>
      </main>
    </Container>

  )
}