import "./App.css";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Routes,
  Switch,
} from "react-router-dom";
const Home = () => <h1>Strona głowna</h1>;
const Blog = () => <h1>BLog</h1>;
const Contact = () => <h1>Kontakt</h1>;
const Error = () => <h1>404</h1>;

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink
                  to="/"
                  exact
                  className={(navData) =>
                    navData.isActive ? "home_selected" : ""
                  }
                  activeStyle={{
                    backgroundColor: "gray",
                  }}
                >
                  Strona Główna
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blog"
                  className={(navData) =>
                    navData.isActive ? "blog_selected" : ""
                  }
                >
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={(navData) =>
                    navData.isActive ? "contact_selected" : ""
                  }
                >
                  Kontakt
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/shop"
                  className={({ isActive, isPending, isTransitioning }) =>
                    [
                      isPending ? "shop_pending" : "",
                      isActive ? "shop_active" : "",
                      isTransitioning ? "shop_transitioning" : "",
                    ].join(" ")
                  }
                >
                  Sklep
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <section>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </section>
      </div>
    </Router>
  );
}

export default App;
