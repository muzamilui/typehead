import "./styles.css";
import { getSuggestion } from "./utils";

const searchInput= document.getElementById('search_input')
const suggestionList = document.querySelector('.suggestion_list')
const debounce=(fn,delay)=>{
let inDebounce;
return function(event){
  clearTimeout(inDebounce)

  inDebounce = setTimeout(()=>fn(event),delay)
}
}
const renderDropdownItems =(list)=>{
const suggFragment =document.createDocumentFragment()
list.forEach((item)=>{
  let el = document.createElement('div')
  el.innerHTML = item
  el.classList.add('list_item')
  suggFragment.appendChild(el)
})
suggestionList.innerHTML='';
suggestionList.appendChild(suggFragment);
}
const handleSearch = (keyword)=>{
  let res = getSuggestion(keyword)
  if(res){
    suggestionList.classList.add('show_list')
    renderDropdownItems(res)
  }
}
function handleInput(e){
let value = e.target.value
if(value){
  handleSearch(value)
}
else{
  suggestionList.classList.remove('show_list')
}
}
(()=>{
  searchInput.addEventListener('input',debounce(handleInput,1000))
})()