import { extendTheme} from "@chakra-ui/react";
import colors from "./custom/colors";

const Card = {
    // The styles all Cards have in common
    baseStyle: {
      display: 'flex',
      flexDirection: 'column',
      background: 'white',
      alignItems: 'center',
      gap: 6,
    },
    // Two variants: rounded and smooth
    variants: {
      rounded: {
        padding: 8,
        borderRadius: 'xl',
        boxShadow: 'xl',
      },
      smooth: {
        padding: 6,
        borderRadius: 'base',
        boxShadow: 'md',
        bgGradient: 'linear(to-r, hsl(13, 100%, 72%), hsl(353, 100%, 62%))'
      },
    },
    // The default variant value
    defaultProps: {
      variant: 'rounded',
    },
  }

const theme = extendTheme({
    colors,
    components: {
        Card 
    }
});

export default theme;