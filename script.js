import { createClient } from "https://cdn.skypack.dev/@supabase/supabase-js"
const supabaseUrl = 'https://jdslbphiulizsmkwkcwg.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impkc2xicGhpdWxpenNta3drY3dnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE2MjgzNjAsImV4cCI6MjA1NzIwNDM2MH0.9xoazNZtNJrSROdi9kHbCrEUMlpkKaZVe42pAyUNd9s"
const supabase = createClient(supabaseUrl, supabaseKey)

async function getBooks() {
let { data: books, error } = await supabase
  .from('books')
  .select('*')
  let booksList = document.getElementById('books');
  
  for (let book of books) {
    booksList.innerHTML += `<tr><td>${book.title}</td><td>${book.author}</td><td>${book.isbn}</td></tr>`;
  }
}

getBooks();