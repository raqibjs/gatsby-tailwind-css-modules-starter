function withOpacity(colorVariable) {
  return ({ opacityVariable, opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${colorVariable}), ${opacityValue})`
    }
    if (opacityVariable !== undefined) {
      return `rgba(var(${colorVariable}), var(${opacityVariable}, 1))`
    }
    return `rgb(var(${colorVariable}))`
  }
}

module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: withOpacity("--primary"),
        secondary: withOpacity("--secondary"),
      },
      fontFamily: {
        heading: ["Prata"],
        body: ["Spinnaker"],
      },
      letterSpacing: {
        "3px": "3px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
