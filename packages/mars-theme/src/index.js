import Theme from "./components";
import image from "@frontity/html2react/processors/image";

const marsTheme = {
  name: "@frontity/mars-theme",
  roots: {
    theme: Theme
  },
  state: {
    theme: {
      mode: 'light'
    }
  },
  actions: {
    theme: {
      setLightMode: ({state}) => {
        state.theme.mode = 'light';
      },
      setDarkMode: ({state}) => {
        state.theme.mode = 'dark';
      }
    }
  },
  libraries: {
    html2react: {
      processors: [image]
    }
  }
};

export default marsTheme;
