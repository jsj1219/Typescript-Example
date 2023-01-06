import { BrowserRouter, Route, Routes } from "react-router-dom";
import "@/App.css";
import "@/index.css";

import Counter from "@components/Counter";
import ToDoList from "@components/ToDoList";
import NotFound from "@components/NotFound";
import Header from "@components/Header";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Counter />}/>
          <Route path="/counter" element={<Counter />}/>
          <Route path="/todolist" element={<ToDoList />}/>
          {/* 404 */}
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
