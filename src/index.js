import ReactDOM from "react-dom/client";
import App from "./App";
import './fetch.js';
import { productList } from './fetch.js'
// styles
import './style/style.css';
import './style/header.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);

// console.log(productList);