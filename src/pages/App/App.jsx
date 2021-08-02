import { useState, useEffect } from "react";
import { Route, useHistory} from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import AuthPage from "./AuthPage/AuthPage";
import NavBar from "../../components/NavBar/NavBar";
import "./App.css";
import * as puppiesAPI from "../../utilities/puppies-api";
import PuppyListPage from "../../components/PuppyListPage/PuppyListPage";
import AddPuppyPage from "../../components/AddPuppyPage/AddPuppyPage";
import PuppyDetailPage from "../../components/PuppyDetailPage/PuppyDetailPage";
import EditPuppyPage from "./EditPuppyPage/EditPuppyPage";

function App() {
  const [user, setUser] = useState(getUser());
  const [puppies, setPuppies] = useState([]);
  const history = useHistory();

  useEffect(() => {
    async function getPuppies() {
      const puppies = await puppiesAPI.getAll();
      setPuppies(puppies);
    }
    getPuppies();
  }, []);

  useEffect(() => {
    history.push("/");
  }, [puppies, history]);

  async function handleAddPuppy(newPupData) {
    const newPup = await puppiesAPI.create(newPupData);
    setPuppies([...puppies, newPup]);
  }

  async function handleUpdatePuppy(updatedPuppyData) {
    const updatedPuppy = await puppiesAPI.update(updatedPuppyData);
    const newPuppiesArray = puppies.map((p) =>
      p._id === updatedPuppy._id ? updatedPuppy : p
    );
    setPuppies(newPuppiesArray);
  }

  async function handleDeletePuppy(id) {
    await puppiesAPI.deleteOne(id);
    setPuppies(puppies.filter((puppy) => puppy._id !== id));
  }

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />

            <Route exact path="/puppies">
              <PuppyListPage
                puppies={puppies}
                handleDeletePuppy={handleDeletePuppy}
              />
            
            </Route>
            <Route exact path="/puppies/add">
              <AddPuppyPage puppies={puppies} handleAddPuppy={handleAddPuppy} />
  
            </Route>
            <Route exact path="/puppies/details">
              <PuppyDetailPage puppies={puppies} />
            
            </Route>
            <Route exact path="/puppies/edit">
              <EditPuppyPage handleUpdatePuppy={handleUpdatePuppy} />
            </Route>
          
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}

export default App;
