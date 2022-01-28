import React from 'react';
import { Box } from '@chakra-ui/react';
import { Flex, Spacer, Container } from '@chakra-ui/react';

import TelegramLoginButton from 'react-telegram-login';

function App() {
  const handleTelegramResponse = (response) => {
    console.log(response);
  };
  return (
    <div className="App">
      <Container maxW="container.xl">
        <Flex bg="black" w="100%" p={4} color="white">
          <Box p="4">SecretApp</Box>
          <Spacer />
          <Box p="4" color="white">
            <TelegramLoginButton
              dataOnauth={handleTelegramResponse}
              botName="secretapplogin_bot"
              buttonSize="medium"
              lang="en"
              usePic="false"
            />
          </Box>
        </Flex>
      </Container>
    </div>
  );
}

export default App;
