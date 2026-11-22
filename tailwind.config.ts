import type { Config } from 'tailwindcss';
const config: Config = { content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'], theme: { extend: { colors: { mos: { navy: '#0B1D35', navy2: '#142B49', gold: '#C9A65C', goldLight: '#E8D5A4', ink: '#15263C', muted: '#66758A', paper: '#F7F8FA' } } } }, plugins: [] };
export default config;
