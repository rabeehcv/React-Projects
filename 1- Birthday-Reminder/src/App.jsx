import React from "react";
import data from './data';
import List from './List';

function App (){
  return (
  <main>
    <section className="container">
      <h3>0 Birthdays Today</h3>
      <List />
    </section>
  </main>
  );
};
export default App;