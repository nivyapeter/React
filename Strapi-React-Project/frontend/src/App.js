import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {ApolloClient, InMemoryCache,ApolloProvider} from "@apollo/client";
import Navbar from "./components/Navbar";
import SiteHeader from "./components/SiteHeader";
import Category from "./pages/Category";
import Products from "./pages/Products";
import Restaurantss from "./pages/Restaurants";
import RestaurantsDetails from "./pages/RestaurantsDetails";

// apollo client used to make new connection
const client = new ApolloClient({
  uri: 'https://localhost:1337/graphql',
  cache: new InMemoryCache(),
})


function App() {
  return (
    <Router>
      <ApolloProvider client={client}>
       <Navbar />
      <div className="App">
       
        <SiteHeader />
        <Routes>
          <Route path="/" element={<Restaurantss />} />
          <Route path="/details/:id" element={<RestaurantsDetails />} />
          <Route path="/category/:id" element={<Category />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </div>
      </ApolloProvider>
    </Router>
  );
}

export default App;
