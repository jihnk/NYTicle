/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontSize: {
      xxs: ['10px', '12px'],
      xs: ['12px', '16px'],
      sm: ['13px', '20px'],
      base: ['16px', '24px'],
      lg: ['18px', '28px'],
      xl: ['24px', '32px'],
  },
    colors: {
      'black': '#000000',
      'white': '#ffffff',
      'blue': '#3478F6',
      'unactive': '#6D6D6D',
      'body': '#E5E5E5',
      'background': '#FEFEFE',
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
