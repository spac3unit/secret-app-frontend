import { Link } from 'react-router-dom';
import {
  Box,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Image,
  Flex,
  Icon,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

import { FaClipboardCheck } from 'react-icons/fa';
import { HiCollection } from 'react-icons/hi';
import { MdHome } from 'react-icons/md';

export const Sidebar = ({ sidebarOpts }: any) => {
  return (
    <>
      <SidebarContent display={{ base: 'none', md: 'unset' }} />
      <Drawer
        isOpen={sidebarOpts.isOpen}
        onClose={sidebarOpts.onClose}
        placement="left"
      >
        <DrawerOverlay />
        <DrawerContent>
          <SidebarContent w="full" borderRight="none" />
        </DrawerContent>
      </Drawer>
    </>
  );
};

const SidebarContent = (props) => (
  <Box
    as="nav"
    pos="fixed"
    top="0"
    left="0"
    zIndex="sticky"
    h="full"
    pb="10"
    overflowX="hidden"
    overflowY="auto"
    bg={useColorModeValue('white', 'gray.900')}
    borderColor={useColorModeValue('inherit', 'gray.700')}
    borderRightWidth="0px"
    boxShadow="xl"
    w="60"
    {...props}
  >
    <Flex px="4" py="5" align="center">
      <Image
        boxSize="50px"
        objectFit="cover"
        src="https://i.imgur.com/0NXXELk.png"
        alt="Logo"
      />
      <Text
        fontSize="2xl"
        ml="2"
        color={useColorModeValue('brand.500', 'white')}
        fontWeight="semibold"
      >
        Chainops
      </Text>
    </Flex>

    <Flex
      direction="column"
      as="nav"
      color="gray.600"
      aria-label="Main Navigation"
    >
      <Link to="/">
        <NavItem icon={MdHome}>HOME</NavItem>
      </Link>
      <Link to="page2">
        <NavItem icon={HiCollection} to="page2">
          PAGE 2
        </NavItem>
      </Link>
      <Link to="page3">
        <NavItem icon={FaClipboardCheck} to="page3">
          PAGE 3
        </NavItem>
      </Link>
    </Flex>
  </Box>
);

const NavItem = (props) => {
  const { to, icon, children, ...rest } = props;
  return (
    <Flex
      align="center"
      px="4"
      pl="4"
      py="3"
      cursor="pointer"
      color={useColorModeValue('inherit', 'gray.400')}
      _hover={{
        bg: useColorModeValue('gray.100', 'gray.900'),
        color: useColorModeValue('gray.900', 'gray.200'),
      }}
      role="group"
      fontWeight="semibold"
      transition=".15s ease"
      {...rest}
    >
      {icon && <Icon mx="2" boxSize="4" as={icon} />}
      {children}
    </Flex>
  );
};
