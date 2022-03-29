interface Theme {
  colors: {
    earth: string;
    water: string;
  };
}
const colors = {
  blue: 'blue',
  brown: '#cc9966',
};

const theme: Theme = {
  colors: {
    earth: colors.brown,
    water: colors.blue,
  },
};

export default theme;
