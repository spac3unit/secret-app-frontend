import {
  Flex,
  IconButton,
  InputGroup,
  InputLeftElement,
  Input,
  Icon,
  Avatar,
  useColorModeValue,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider,
  Portal,
} from '@chakra-ui/react';
import { FiMenu, FiSearch } from 'react-icons/fi';
import { FaBell } from 'react-icons/fa';

export const Header = ({ sidebarOpts }) => {
  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      w="full"
      px="4"
      bg={useColorModeValue('white', 'gray.800')}
      backgroundColor="#fefefe"
      borderBottomWidth="0px"
      borderColor={useColorModeValue('inherit', 'gray.700')}
      boxShadow="lg"
      h="16"
    >
      <IconButton
        aria-label="Menu"
        display={{ base: 'inline-flex', md: 'none' }}
        onClick={sidebarOpts.onOpen}
        icon={<FiMenu />}
        size="sm"
      />

      <InputGroup w="96" display={{ base: 'none', md: 'flex' }}>
        <InputLeftElement color="gray.500" children={<FiSearch />} />
        <Input placeholder="Search smth..." />
      </InputGroup>

      <Flex align="center">
        <Icon color="gray.500" as={FaBell} cursor="pointer" />

        <Menu>
          <MenuButton>
            <Avatar
              ml="4"
              size="sm"
              name="anubra266"
              src="https://www.pngfind.com/pngs/m/236-2367373_pepe-the-clown-smug-meme-clown-pepe-hd.png"
              cursor="pointer"
            />
          </MenuButton>
          <Portal>
            <MenuList>
              <MenuGroup title="Profile">
                <MenuItem>My Account</MenuItem>
                <MenuItem>Settings</MenuItem>
              </MenuGroup>
              <MenuDivider />
              <MenuGroup title="Help">
                <MenuItem>Docs</MenuItem>
                <MenuItem>FAQ</MenuItem>
              </MenuGroup>
            </MenuList>
          </Portal>
        </Menu>
      </Flex>
    </Flex>
  );
};
