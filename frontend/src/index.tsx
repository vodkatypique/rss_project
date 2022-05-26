import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Feed from './Components/Feed';
import Item from './Components/Item';
import FeedsBar from './Components/FeedsBar';
import IdentificationBox from './Components/IdentificationBox';
import AddFeedBox from './Components/AddFeedBox';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<><IdentificationBox/><AddFeedBox/><FeedsBar/><Feed /></>} />
        <Route path="/feed/:slug" element={<><IdentificationBox/><AddFeedBox/><FeedsBar/><Feed /></>} />
      </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
