
import './App.css'
import Carousel from "./components/Carousel.tsx"

function App() {
 return (
   <div 
    style={{
      maxWidth: "1000px",
      width: "100%",
      //height: "500px",
      aspectRatio: " 10 / 6",
      margin: "0 auto"
   }}>
      <Carousel />
   </div>
 )
}

export default App
