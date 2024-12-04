import Stack from '@mui/material/Stack';
import Header from "./components/Header.jsx";
import SingleCard from "./components/Card.jsx";
import booksData from "./data/books.json";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Form from "./components/Form.jsx";

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>

      <Route path="/" element={<Header />}>
        <Route path="" element={
          <Stack direction="row" spacing={2} sx={{
          justifyContent: "space-evenly",
          alignItems: "center",
          margin: "20px 0px"
        }}>
          {booksData.books.map(book => <SingleCard key={book.id} name={book.name} url={book.img} genres={book.genres} author={book.author} rating={book.stars}/>)}
          </Stack>
        }>
        </Route>
        <Route path="form" element={<Form />}></Route>
      </Route>

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
