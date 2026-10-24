
export default {
  content: ["./index.html","./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        telkom: { 50:'#fef2f2',100:'#fee2e2',200:'#fecaca',300:'#fca5a5',400:'#f87171',500:'#C1272D',600:'#A51E23',700:'#8A1A1D',800:'#6E1517',900:'#521010' },
        paper: { light:'#fdf8f7', dark:'#0f0a0a' }
      },
      boxShadow: { card:'0 2px 12px rgba(0,0,0,0.06)', cardHover:'0 8px 24px rgba(0,0,0,0.10)', telkom:'0 4px 20px rgba(193,39,45,0.25)' },
      fontFamily: { sans:['Inter','system-ui','sans-serif'] }
    }
  },
  darkMode: 'class',
  plugins: []
}
