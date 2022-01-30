import { Box, useColorModeValue, useDisclosure } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { Header } from './Header';

function App() {
  const sidebar = useDisclosure();
  return (
    <Router>
      <Box
        as="section"
        bg={useColorModeValue('gray.50', 'gray.700')}
        minH="100vh"
      >
        <Sidebar sidebarOpts={sidebar} />

        <Box ml={{ base: 0, md: 60 }} transition=".3s ease">
          <Header sidebarOpts={sidebar} />

          <Box as="main" p="4">
            <Box borderWidth="4px" borderStyle="dashed" rounded="md" h="96">
              <Routes>
                <Route path="/" element={<h1>Home Page</h1>} />
                <Route path="page2" element={<h1> Page 2</h1>} />
                <Route path="page3" element={<h1> Page 3</h1>} />
              </Routes>
            </Box>
          </Box>
        </Box>
      </Box>
    </Router>
  );
}

export default App;
