import Header from "./Components/Header.js";
import Footer from "./Components/Footer.js";
import SignUp from "./Components/SignUp.js";
import Plans from "./Components/Plans";

let sampleData = {
  firstName: "shreyas",
  lastName: "girjapure",
  dob: new Date(),
  address: "hello world",
  phone: "1231231",
  email: "shreyas@gmail.com",
};
let plans = [
  {
    description: "first plan",
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
      <SignUp data={sampleData} />
      <Plans plans={plans} />
      <Footer />
    </div>
  );
}

export default App;
