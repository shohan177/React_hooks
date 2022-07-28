
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Comp1, Comp2, Comp3 } from './Container';
import AuthContext from './context/authContext';
import MsgContext from './context/msgContext';


function App() {
  const [data, setData] = useState()
  const [authData, setAuthData] = useState({
    id: 1,
    name: 'shohan',
    email: 'shohan@gmail.com'
  })
  return (
    <AuthContext.Provider value={{ authData, setAuthData }}>
      <MsgContext.Provider value={{ data, setData }}>
        <Container className='my-6'>
          <Comp1 />
          <Comp2 />
          <Comp3 />
        </Container>

      </MsgContext.Provider>
    </AuthContext.Provider>

  );
}

export default App;
