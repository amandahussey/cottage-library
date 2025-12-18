import { defaultConfig } from "@tamagui/config/v4";
import { createTamagui, TamaguiProvider } from "@tamagui/core";
import { Button } from "tamagui";

// you usually export this from a tamagui.config.ts file
const config = createTamagui(defaultConfig);

type Conf = typeof config;

// make imports typed
declare module "@tamagui/core" {
  interface TamaguiCustomConfig extends Conf {}
}

export default function Index() {
  return (
    <TamaguiProvider config={config}>
      <Button theme="blue">Hello world</Button>
    </TamaguiProvider>
  );
}
