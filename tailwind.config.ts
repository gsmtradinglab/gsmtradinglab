import type { Config } from "tailwindcss";
const config: Config = {content:["./app/**/*.{ts,tsx}","./components/**/*.{ts,tsx}","./lib/**/*.{ts,tsx}"],theme:{extend:{colors:{bg:"#070B10",card:"#101A27",panel:"#0C141F",greenx:"#16C784",redx:"#EA3943",goldx:"#F5C542"},boxShadow:{glow:"0 0 40px rgba(22,199,132,.10)"}}},plugins:[]};
export default config;
