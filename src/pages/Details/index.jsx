// using the same name for the function and for the document to make easier do identify
// and every Component has to have the first letter as a Uppercase
import { Container, Content, Avatar, Links } from './styles';

import { FiArrowLeft, FiClock } from 'react-icons/fi';
import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { Tag } from '../../components/Tag';
import { Link } from 'react-router-dom';

export function Details() {


  return(
    <Container>
      <Header />
      
      <main>
        <Content>
          
          <Links>
            <Link to="/"><FiArrowLeft /> Go back</Link>
          </Links>
          
          <header>
            <h1>Titanic</h1>            
          </header>
          
          <div className='author'>
            <Avatar>
              <img 
              src="http://github.com/silviocn.png" 
              alt="User profile image" />

            </Avatar>
            
            <h3>By Silvio Costa</h3> <FiClock id='clock'/> <h3>23/05/22 às 8:00</h3>
          </div>

          <Section>
            <Tag id="tag" title="Sci-Fi" />
            <Tag id="tag" title="Drama" />
            <Tag id="tag" title="Family" />
          </Section>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque sequi consectetur fugiat quos commodi rerum facere asperiores, 
            pariatur excepturi saepe in magni porro. More text more text more text! Bla bla bla bla. Iure eveniet velit reiciendis atque 
            ex explicabo! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque sequi consectetur fugiat quos commodi rerum facere asperiores, 
            pariatur excepturi saepe in magni porro. More text more text more text! Bla bla bla bla. Iure eveniet velit reiciendis atque 
            ex explicabo!
          </p>

        </Content>
      </main>
    </Container>

  )
}