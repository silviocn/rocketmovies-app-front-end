import { Container } from './styles';
import { Tag } from './../Tag';
import { Fragment } from 'react';
import { Section } from '../Section';

export function Note({ data, description, ...rest }) {
  return (
    <Fragment>
      <Section></Section>

      <Container {...rest}>
        <h1>{data.title}</h1>
        <h2>{data.description}</h2>

        {
          data.tags &&
          <footer>
            {
              data.tags.map(tag => <Tag key={tag.id} title={tag.name}/>)
            }
          </footer>
        }

        
      </Container>

      <Container {...rest}>
        <h1>{data.title}</h1>
        <h2>{data.description}</h2>

        {
          data.tags &&
          <footer>
            {
              data.tags.map(tag => <Tag key={tag.id} title={tag.name}/>)
            }
          </footer>
        }

        
      </Container>

      <Container {...rest}>
        <h1>{data.title}</h1>
        <h2>{data.description}</h2>

        {
          data.tags &&
          <footer>
            {
              data.tags.map(tag => <Tag key={tag.id} title={tag.name}/>)
            }
          </footer>
        }

        
      </Container>

    </Fragment>
    
  )
}