import React, { useState } from 'react';
import { createStyles, Navbar, UnstyledButton, Tooltip, Title, Center, Group, Accordion, Button, Container, Box, ScrollArea, Text } from '@mantine/core';
import {
  Home2,
  Gauge,
  DeviceDesktopAnalytics,
  Fingerprint,
  CalendarStats,
  User,
  Settings,
  Icon as TablerIcon,
  Logout,
  SwitchHorizontal,
  Hash,
  Rss,
  History,
  Bookmark,
  Plus,
} from 'tabler-icons-react';

const useStyles = createStyles((theme) => ({
  wrapper: {
    display: 'flex',
  },

  aside: {
    flex: '0 0 60px',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRight: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[3]
    }`,
  },

  main: {
    flex: 1,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
  },

  mainLink: {
    width: 74,
    height: 44,
    borderRadius: theme.radius.md,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
    },
  },

  title: {
    boxSizing: 'border-box',
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    marginBottom: theme.spacing.xl,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    padding: theme.spacing.md,
    paddingTop: 18,
    height: 60,
    borderBottom: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[3]
    }`,
  },

  logo: {
    boxSizing: 'border-box',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    height: 60,
    paddingTop: theme.spacing.md,
    borderBottom: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[3]
    }`,
    marginBottom: theme.spacing.xl,
  },

  link: {
    boxSizing: 'border-box',
    display: 'block',
    textDecoration: 'none',
    borderTopRightRadius: theme.radius.md,
    borderBottomRightRadius: theme.radius.md,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    padding: `0 ${theme.spacing.md}px`,
    fontSize: theme.fontSizes.sm,
    margin: ` ${theme.spacing.md}px ${theme.spacing.md}px  ${theme.spacing.md}px 0`,

    fontWeight: 500,
    height: 44,
    lineHeight: '44px',

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    },
  },

  linkActive: {
    '&, &:hover': {
      borderLeftColor: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 7 : 5],
      backgroundColor: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 7 : 5],
      color: theme.white,
    },
  },
  button: {
    borderRadius: 0,
        margin: ` ${theme.spacing.md/2}px 0 ${theme.spacing.md/2}px 0`,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.gray[8] : theme.colors.gray[1],
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    },

    '&:not(:first-of-type)': {
      borderLeftWidth: 0,
    },

    '&:first-of-type': {
      borderTopLeftRadius: theme.radius.sm,
      borderBottomLeftRadius: theme.radius.sm,
    },

    '&:last-of-type': {
      borderTopRightRadius: theme.radius.sm,
      borderBottomRightRadius: theme.radius.sm,
    },
  },
}));

const leftLinksMockdata = [
  { icon: Home2, label: 'Home' },
  { icon: User, label: 'Account' },
  { icon: Plus, label: 'Add Feed'},
  { icon: Settings, label: 'Settings' },
];

const linksMockdata = [
  'Feed 1',
  'Feed 2',
  'Feed 3',
  'Feed 4',
  'Feed 4',
  'dkjhdjq dqskuhdkj',
  'ddhdq auiuifg',
  'uaoiangzkl',
  'dqkjdklqjdk',
  'dqkshjklqsndkqnsk',
  'qjdhjdqbkjbjsqd',
];

export function NavbarPrincipal() {
  const { classes, cx } = useStyles();
  const [activeLink, setActiveLink] = useState('Settings');

  const leftLinks = leftLinksMockdata.map((link) => (
     <a
      className={cx(classes.link)}
      href="/"
      onClick={(event) => {
        event.preventDefault();
        //do something
      }}
    >
      <link.icon />
    </a>
  ));

  const standardLinks = ['Saved', 'History'].map((link) => (
    <Group noWrap spacing={0} pr={16} pl={16}>
      <Button
    color="gray"
    radius="md" 
      className={classes.button}
      onClick={() => {
        setActiveLink(link)
      }}
      leftIcon={link === 'Saved' ? <Bookmark size={18} /> : <History size={18} />}
    >
      {link}
      
    </Button>
      <Button fullWidth color="gray" className={classes.button}></Button>
    <Button 
    color="gray"
    radius="md" 
      className={classes.button}
      onClick={() => {
        //do something
      }}
      rightIcon={ <Settings size={18} />}
    >
    </Button>
    </Group>
  ));

  const links = linksMockdata.map((link) => (
    <Group noWrap spacing={0}>
      <Button
    color="gray"
    radius="md" 
      className={classes.button}
      onClick={() => {
        setActiveLink(link)
      }}
      leftIcon={<Rss size={18} />}
    >
      {link}
    </Button>
      <Button fullWidth color="gray" className={classes.button}
      onClick={() => {
        //do something
      }}></Button>
    <Button 
    color="gray"
    radius="md" 
      className={classes.button}
      onClick={() => {
        //do something
      }}
      rightIcon={ <Settings size={18} />}
    >
    </Button>
    </Group>
    
  ));
  

  return (
    <Navbar width={{ base: 400 }} >
      <Navbar.Section grow mt={0} className={classes.wrapper}>
          <Group direction="column" align="center" spacing={10} pr={0}>
            {leftLinks}
          </Group>
        
        <Navbar.Section grow mt={0} className={classes.main}>
          <Title order={4} className={classes.title} mb={5}>
            {activeLink}
          </Title>
          {standardLinks}
          <Accordion offsetIcon={false}>
            <Accordion.Item label="MY FEEDS">
            <ScrollArea style={{ height: 400 }}>
             {links}
             </ScrollArea>
            </Accordion.Item>
            <Accordion.Item label="MY FEEDS 2">
            <ScrollArea style={{ height: 400 }}>
             {links}
             </ScrollArea>
            </Accordion.Item>
          </Accordion>
        </Navbar.Section>
        
      </Navbar.Section>
    </Navbar>
  );
}