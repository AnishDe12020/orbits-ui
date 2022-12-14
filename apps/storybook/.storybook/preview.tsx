import {
  mainColors,
  components,
  accentBlue,
  accentBlueTokens,
  stateColors,
} from "@orbits-ui/chakra-theme";

// import * as React from "react";
// import {
//   ChakraProvider,
//   ColorModeScript,
//   extendTheme,
//   Flex,
//   IconButton,
//   useColorMode,
//   useColorModeValue,
// } from "@chakra-ui/react";
// import { Sun, Moon } from "react-feather";

// const theme = extendTheme({
//   components,
//   semanticTokens: { colors: { ...mainColors, ...accentBlue } },
//   styles: {
//     global: {
//       "html, body": {
//         background: "brand.primary",
//       },
//     },
//   },
//   config: {
//     initialColorMode: "dark",
//     useSystemColorMode: false,
//   },
// });

export const parameters = {
  chakra: {
    theme: {
      components,
      colors: { ...accentBlue },
      semanticTokens: {
        colors: { ...mainColors, ...accentBlueTokens, ...stateColors },
      },
      styles: {
        global: {
          "html, body": {
            background: "brand.primary",
          },
        },
      },
    },
  },
};

// const withChakraUI = (StoryFn, context) => {
//   const { toggleColorMode } = useColorMode();

//   return (
//     <>
//       <ColorModeScript initialColorMode={theme.config.initialColorMode} />

//       <ChakraProvider theme={theme}>
//         <Flex mb={8} justifyContent="end">
//           <IconButton
//             aria-label="Switch Color Mode"
//             onClick={() => {
//               console.log("t");
//               toggleColorMode();
//             }}
//             icon={useColorModeValue(<Moon />, <Sun />)}
//           />
//         </Flex>
//         <StoryFn {...context} />
//       </ChakraProvider>
//     </>
//   );
// };

// export const decorators = [withChakraUI];
