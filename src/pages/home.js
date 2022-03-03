import { useDispatch, useSelector } from 'react-redux'
import { inc, fetchGit } from '../store/slice/appSlice'
import { Button, Container } from '@chakra-ui/react'

function Home() {
  const dispatch = useDispatch()
  const data = useSelector(state => state.app)
  return (
    <Container mb="700" maxW='container.xl'>
      <h1> Home {JSON.stringify(data)} </h1>
      <Button colorScheme="teal" onClick={() => dispatch(fetchGit())}>plus</Button>
      
    </Container>
  )
}
  
export default Home