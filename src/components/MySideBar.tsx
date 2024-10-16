import React from 'react';
import { Box, AppShell, ScrollArea, Styles, rem } from "@mantine/core";
import { createStyles } from "@mantine/emotion";
import { getBooks, getChapters, getVerses } from "./BibleFormat";
import { useBibleStore } from "./BibleStore";

/*const useStyles = createStyles((theme, _, u) => ({
  border: {
    borderRight: `${rem(1)} solid ${
      theme.colorScheme === "dark" 
        ? theme.colors.dark[5] 
        : theme.colors.gray[3]
    }`,
  },

  link: {
    boxSizing: "border-box",
    display: "block",
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    padding: `0 ${theme.spacing.xs}`,
    fontSize: theme.fontSizes.sm,
    marginRight: theme.spacing.xs,
    marginLeft: theme.spacing.xs,
    fontWeight: 500,
    height: rem(30),
    lineHeight: rem(30),

    "&:hover": {
      [u.dark]: {
        backgroundColor: theme.colors.dark[6],
        color: theme.white
      },
      [u.light]: {
        backgroundColor: theme.colors.gray[0],
        color: theme.black
    },
  },

  linkActive: {
    "&, &:hover": {
      [u.dark]: {
        backgroundColor: theme.colors.dark[6],
        color: theme.white
      },
      [u.light]: {
        backgroundColor: theme.colors.gray[0],
        color: theme.black
    },
  },
}});
*/

const useStyles = createStyles((theme, _, u) => ({
  border: {
    borderRight: `${rem(1)} solid ${
      [u.dark]
      //theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[3]
    }`,
  },

  link: {
    boxSizing: 'border-box',
    display: 'block',
    textDecoration: 'none',
    //color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    padding: `0 ${theme.spacing.xs}`,
    fontSize: theme.fontSizes.sm,
    marginRight: theme.spacing.xs,
    marginLeft: theme.spacing.xs,
    fontWeight: 500,
    height: rem(30),
    lineHeight: rem(30),

    '&:hover': {
      [u.dark]: {
        backgroundColor: theme.colors.dark[6],
        color: theme.white
      },
  
      [u.light]: {
        backgroundColor: theme.colors.gray[0],
        color: theme.black
      },
    },
  },

  linkActive: {
    '&, &:hover': {
      [u.dark]: {
        backgroundColor: theme.colors.dark[6],
        color: theme.white
      },
  
      [u.light]: {
        backgroundColor: theme.colors.gray[0],
        color: theme.black
      },
    },
  },
}));

const MySideBar = ({
  opened,
  setOpened,
}: {
  opened: boolean;
  setOpened: (opened: boolean) => void;
}) => {
  const { classes, cx } = useStyles();
  const activeBook = useBibleStore((state) => state.activeBook);
  const activeChapter = useBibleStore((state) => state.activeChapter);
  const activeVerse = useBibleStore((state) => state.activeVerse);
  const setActiveBook = useBibleStore((state) => state.setActiveBook);
  const setActiveBookShort = useBibleStore((state) => state.setActiveBookShort);
  const setActiveChapter = useBibleStore((state) => state.setActiveChapter);
  const setActiveVerse = useBibleStore((state) => state.setActiveVerse);

  return (
    <AppShell
      navbar={{
        //py: "sm",
        breakpoint: "sm",
        //hidden: !opened,
        width: { sm: 320, lg: 320 },
        /*sx: {
          overflow: "hidden",
          transition: "width 1000ms ease, min-width 1000ms ease",
        }*/
      }}
      
    >
      <AppShell.Navbar style={{ display: "flex" }}>
        <Box style={{ flex: "0 0 185px" }}>
          <ScrollArea h="88vh" className={classes.border}>
            {getBooks().map((book) => (
              <a
                className={cx(classes.link, {
                  [classes.linkActive]: activeBook === book.book_name,
                })}
                href="/"
                onClick={(event) => {
                  event.preventDefault();
                  setActiveBook(book.book_name);
                  setActiveBookShort(book.book_id);
                }}
                key={book.book_id}
                title={"nav-book-" + book.book_id}
              >
                {book.book_name}
              </a>
            ))}
          </ScrollArea>
        </Box>
        <Box style={{ flex: "1 0 60px" }}>
          <ScrollArea h="88vh" className={classes.border}>
            {getChapters(activeBook).map((chapter) => (
              <a
                className={cx(classes.link, {
                  [classes.linkActive]: activeChapter === chapter,
                })}
                href="/"
                onClick={(event) => {
                  event.preventDefault();
                  setActiveChapter(chapter);
                }}
                key={chapter}
                title={"nav-chapter-" + chapter}
              >
                {chapter}
              </a>
            ))}
          </ScrollArea>
        </Box>
        <Box style={{ flex: "1 0 60px" }}>
          <ScrollArea h="88vh">
            {getVerses(activeBook, activeChapter).map((verse) => (
              <a
                className={cx(classes.link, {
                  [classes.linkActive]: activeVerse === verse,
                })}
                href="/"
                onClick={(event) => {
                  event.preventDefault();
                  setActiveVerse(verse);
                  setOpened(false);
                }}
                key={verse}
                title={"nav-verse-" + verse}
              >
                {verse}
              </a>
            ))}
          </ScrollArea>
        </Box>
      </AppShell.Navbar>
    </AppShell>
  );
};

export default MySideBar;