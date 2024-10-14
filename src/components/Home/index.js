import {AiOutlineDelete} from 'react-icons/ai'
import {
  ImageContainer,
  DeleteButton,
  PropContainer,
  ListItem,
  Paragraph,
  ParaContainer,
  Duration,
  Heading,
  DurationDeleteContainer,
} from './styledComponents'

const Home = props => {
  const {imageDetails, deleteItem} = props
  const {id, imageUrl, name, genre, duration} = imageDetails
  const onClickDelete = () => {
    deleteItem(id)
  }

  return (
    <ListItem>
      <ImageContainer src={imageUrl} alt="track" />
      <PropContainer>
        <ParaContainer>
          <Heading>{name}</Heading>
          <Paragraph>{genre}</Paragraph>
        </ParaContainer>
        <DurationDeleteContainer>
          <Duration>{duration}</Duration>
          <DeleteButton
            data-testid="delete"
            type="button"
            onClick={onClickDelete}
          >
            <AiOutlineDelete />
          </DeleteButton>
        </DurationDeleteContainer>
      </PropContainer>
    </ListItem>
  )
}

export default Home
