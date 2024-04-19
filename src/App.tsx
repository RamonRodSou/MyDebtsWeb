import { Container } from '@mui/material'
import './App.css'
import AddDebt from './componets/AddDebt/AddDebt'
import ListDebt from './componets/ListDebt/ListDebt'

function App() {

  return (
      <Container>
        <AddDebt/>
        <ListDebt/>
      </Container>
  )
}

export default App
