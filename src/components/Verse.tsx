import { Box, Text, Title } from "@mantine/core";
import { createStyles } from "@mantine/emotion";
import { useBibleStore } from "./BibleStore";
import { useRef } from "react";
import React from "react";

const useStyles = createStyles((theme, _, u) => ({
  link: {
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
  },
}));

const Verse = ({ verse, text }: { verse: number; text: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { classes, cx } = useStyles();
  const activeVerse = useBibleStore((state) => state.activeVerse);
  const setActiveVerse = useBibleStore((state) => state.setActiveVerse);
  setTimeout(() => {
    ref.current?.scrollIntoView({ block: "center", behavior: "smooth" });
  }, 1000);
  return (
    <Box
      component="div"
      display="flex"
      className={cx(classes.link, {
        [classes.linkActive]: activeVerse === verse,
      })}
      py={7}
      px={10}
      onClick={() => setActiveVerse(verse)}
      id={"verse-" + verse}
      ref={activeVerse === verse ? ref : null}
    >
      <Text fz="sm" fw="bold" mr={3}>
        {verse}
      </Text>
      <Title order={3} title={"passage-verse-" + verse}>
        {text}
      </Title>
    </Box>
  );
};

export default Verse;