module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Logo Colors
        primary1: '#000000', // Primary 1 - Black
        primary2: '#FFBB00', // Primary 2 - Yellow

        // Button Colors
        'button-primary': '#FFCF4B', // Main - Light Yellow
        'button-secondary': '#27AE60', // Stroke - Dark Yellow

        'button-secondary-main': '#F9F9F9', // Main - Light Grey
        'button-secondary-stroke': '#CEC6C6', // Stroke - Dark Grey

        // Text Colors
        textMain: '#262328', // Main Text Color
        textSecondary: '#65624C', // Secondary Text Color

        // Greys
        gray1: '#333333',
        gray2: '#4F4F4F',
        gray3: '#828282',
        gray4: '#B7B6B8',
        gray5: '#E0E0E0',
      },
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'], // Add Google Font Inter
    },
    fontSize: {
      'heading-1': '58px',
      'heading-2': '36px',
      'heading-3': '24px',
      'heading-4': '20px',
      'heading-5': '18px',
      'heading-6': '16px',
    },
    lineHeight: {
      'heading-1': '1.1', // For heading 1 specifically
    },
  },
  plugins: [],
}