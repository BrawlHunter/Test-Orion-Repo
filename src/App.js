import Header from "./Components/Header.js";
import Footer from "./Components/Footer.js";
import SignUp from "./Components/SignUp.js";
import Plans from "./Components/Plans";

let plans = [
  {
    description: ["first plan the next line data "],
    imageUrl: "https://source.unsplash.com/1000x600/?workout",
  },
  {
    description: "second plan",
    imageUrl: "https://source.unsplash.com/1000x600/?gym,fitness",
  },
  {
    description: "third plan",
    imageUrl: "https://source.unsplash.com/1000x600/?fitness",
  },
];
function App() {
  return (
    <div className="App container">
      <Header />
      <h1>Hello Bitches 😎</h1>
      <SignUp />
      <Plans plans={plans} />
      <Footer />
    </div>
  );
}

export default App;
