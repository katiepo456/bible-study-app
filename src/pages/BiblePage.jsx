import {
    AppShell,
    MantineProvider,
    ColorSchemeProvider,
    ColorScheme,
  } from "@mantine/core";
  import { useDisclosure, useLocalStorage, useWindowEvent } from "@mantine/hooks";
  import MySideBar from "../components/MySideBar";
  import { useState } from "react";
  import Passage from "../components/Passage";

function BiblePage() {
    const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
        key: "color-scheme",
        defaultValue: "dark",
      });
      const toggleColorScheme = () =>
        setColorScheme((current) => (current === "dark" ? "light" : "dark"));
      const [opened, setOpened] = useState(false);
      const [modalOpened, modalFn] = useDisclosure(false);
      useWindowEvent("keydown", (event) => {
        if (event.key === "/") {
          event.preventDefault();
          modalFn.open();
        }
        if (event.key === "Escape") {
          event.preventDefault();
          modalFn.close();
        }
      });
    
    return (
        <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{ colorScheme }}
        withGlobalStyles
        withNormalizeCSS
      >
        <AppShell
          padding="md"
          navbar={<MySideBar opened={opened} setOpened={setOpened} />}
          styles={(theme) => ({
            main: {
              backgroundColor:
                theme.colorScheme === "dark"
                  ? theme.colors.dark[8]
                  : theme.colors.gray[0],
              height: "100vh",
            },
          })}
        >
          <Passage open={modalFn.open} />
        </AppShell>
      </MantineProvider>
    </ColorSchemeProvider>
  );
        
}

export default BiblePage;