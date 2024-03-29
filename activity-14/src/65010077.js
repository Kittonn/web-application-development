import { Component } from "react";

document.body.style.backgroundColor = "gray";
document.body.style.margin = "0";
document.body.style.padding = "0";

export default class App extends Component {
  constructor() {
    super();
    this.foods = [
      {
        id: 0,
        category: "อาหารคาว",
        name: "ชาบู",
        info: "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod.",
        image:
          "https://hello2day.com/wp-content/uploads/2022/01/nj-shabu-shabu-pattaya-delivery-21.jpg",
      },
      {
        id: 1,
        category: "อาหารหวาน",
        name: "เฉาก๊วย ชากังราว",
        info: "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis .",
        image:
          "https://www.thaibusiness.in.th/wp-content/uploads/2014/09/%E0%B9%80%E0%B8%89%E0%B8%B2%E0%B8%81%E0%B9%8A%E0%B8%A7%E0%B8%A23.jpg",
      },
    ];
  }

  render() {
    return (
      <div>
        <h1
          style={{ textAlign: "center", color: "#ffc300", margin: "2.5rem 0" }}
        >
          โหวตอาหาร
        </h1>
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {this.foods.map((food) => {
              return (
                <Card
                  key={food.id}
                  category={food.category}
                  name={food.name}
                  info={food.info}
                  image={food.image}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

class Card extends Component {
  state = {
    vote: 0,
  };

  handleCallback = (count) => {
    if (this.state.vote === 10 && count === 1) {
      alert("Cannot vote more");
      return;
    }

    if (this.state.vote === 0 && count === -1) {
      alert("Cannot unvote");
      return;
    }

    this.setState({ vote: this.state.vote + count });
  };

  render() {
    return (
      <div
        style={{
          backgroundColor: "blanchedalmond",
          border: "3px solid black",
          borderRadius: "1rem",
          maxWidth: "750px",
          padding: "1.5rem",
        }}
      >
        <div style={{ display: "flex", gap: "0.5rem" }}>
          <div>
            <h2>{this.props.category}</h2>
            <h3>{this.props.name}</h3>
            <p>{this.props.info}</p>
          </div>
          <div
            style={{
              minWidth: "250px",
            }}
          >
            <img
              src={this.props.image}
              alt={this.props.name}
              style={{ width: "100%" }}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.75rem",
          }}
        >
          <Button text="Click to Vote" callback={this.handleCallback} />
          <VoteDisplay vote={this.state.vote} />
          <Button text="Click to Unvote" callback={this.handleCallback} />
        </div>
      </div>
    );
  }
}

class Button extends Component {
  handleOnClick = (e) => {
    if (e.target.innerText === "Click to Vote") {
      this.props.callback(1);
    } else {
      this.props.callback(-1);
    }
  };

  render() {
    return (
      <button style={{ padding: "0.3rem" }} onClick={this.handleOnClick}>
        {this.props.text}
      </button>
    );
  }
}

class VoteDisplay extends Component {
  render() {
    return (
      <h2
        style={{
          backgroundColor: "#3be833",
          color: "purple",
          border: "2px solid black",
          padding: "0.5rem",
          margin: "0",
          borderRadius: "0.5rem",
        }}
      >
        {this.props.vote === 0
          ? "MIN"
          : this.props.vote === 10
          ? "MAX"
          : this.props.vote}
      </h2>
    );
  }
}
