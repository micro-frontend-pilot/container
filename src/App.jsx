import React from "react";
import ReactDOM from 'react-dom/client';

import "./index.scss";
import PutTogether from "./PutTogether";

const App = () => (
  <PutTogether />
);

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);

// const root = ReactDOM.hydrateRoot(document.getElementById("app"));
// root.render(
//   <React.StrictMode>
//       <App />
//   </React.StrictMode>
  
// );

// const mountElement = document.getElementById('app');
// (mountElement.childElementCount === 0)
//     ? 
//     ReactDOM.createRoot(mountElement).render(
//       <App/>
//     )
//     : 
//     ReactDOM.hydrateRoot(mountElement).render(
//       <App/>
//     );
