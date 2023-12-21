import { Component } from "react";
import Character from "./Character";

class Disney extends Component {
  state = {
    // characters: ["Aladdin", "Jafar", "Lago", "Hercules", "Simba", "AristoCats", "Goofy", "Mickey"]
    characters: []
  };

  fetchCharacters = async () => {
    try {
      const resp = await fetch("https://api.disneyapi.dev/character");
      if (resp.ok) {
        const charactersObj = await resp.json();

        console.log("FETCHED", charactersObj.data);

        this.setState({ characters: charactersObj.data });
      }
    } catch (err) {
      console.log(err);
    }
  };

  //   fetchCharacters2 = () => {
  //     fetch("https://api.disneyapi.dev/character")
  //       .then(resp => resp.json())
  //       .then(characters => fetch(characters.next))
  //       .then(resp => resp.json())
  //       .then(characters => console.log("CHARACTERS", characters))
  //       .catch(err => console.log(err));

  //     console.log("LAST");
  //   };

  componentDidMount() {
    this.fetchCharacters();
  }

  render() {
    // this.fetchCharacters(); // MAI CHIAMARE UNA FETCH DENTRO AL RENDER (per via del setState interno che creerebbe ricorsione inifinita!)

    return (
      <div className="disney">
        <h2>Personaggi Disney</h2>
        {this.state.characters.length > 0 ? (
          <ul>
            {this.state.characters.map((char, i) => (
              <>
                {char.imageUrl && <Character key={`character-${i}`} char={char} characters={this.state.characters} />}
              </>
            ))}
          </ul>
        ) : (
          <p>Nessun Personaggio Disponibile</p>
        )}
      </div>
    );
  }
}

export default Disney;
