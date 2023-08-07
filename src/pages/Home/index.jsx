import { FiPlus } from 'react-icons/fi'; // importing icon used in new note button
import { Container, Content } from './styles';
import { Link } from 'react-router-dom';
import { Note } from './../../components/Note';
import { Header } from './../../components/Header';
import { Section } from './../../components/Section';

export function Home() {
  const [search, setSearch] = useState("");
  const [notes, setNotes] = useState([]);
  const [tags, setTags] = useState([]);
  const [tagsSelected, setTagsSelected] = useState([]);

  const navigate = useNavigate();

  function handleTagSelected(tagName) {
    if(tagName === "all") {
      return setTagsSelected([]);
    }

    const alreadySelected = tagsSelected.includes(tagName); // used to know if the Tag is already selected or not
    
    if(alreadySelected) {
      const filteredTags = tagsSelected.filter(tag => tag !== tagName); // show all tags less the not selected
      setTagsSelected(filteredTags);
    } else {
      setTagsSelected(prevState => [... prevState, tagName]); // show all tags selected before plus the last one selected
    }
  }

  function handleDetails(id) {
    navigate(`/details/${id}`);
  }

  useEffect(() => {
    async function fetchTags() { // creating this function to use in useEffect because it doesn't run async function
      const response = await api.get("/tags");
      setTags(response.data);
    } 
      
    fetchTags();    
  }, []); // whit empty array, this state will run only once when loading the page

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes?title=${search}&tags=${tagsSelected}`); // looking for notes and tags typed by user
      setNotes(response.data);
    }

    fetchNotes();
  }, [tagsSelected, search]); // this state will run every time one of those are requested (tagsSelected or search)
  
  
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
          <Note>
            {
              notes.map( note => (
                <Note
                key={String(note.id)}
                data={note}
                onClick={() => handleDetails(note.id)}
                />
              ))
            }
          </Note>           
        </Section>
      </Content>
    
    
    </Container>
  );
}