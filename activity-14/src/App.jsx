import { Component } from "react";

export default class App extends Component {
  constructor() {
    super();
    this.foods = [
      {
        id: 0,
        category: "อาหารคาว",
        name: "ชาบู",
        info: "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod..",
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
    );
  }
}

class Card extends Component {
  render() {
    return (
      <div>
        <div>
          <div>
            <h2>{this.props.category}</h2>
            <h3>{this.props.name}</h3>
            <p>{this.props.info}</p>
          </div>
          <div>
            <img src={this.props.image} alt={this.props.name} />
          </div>
        </div>
        <div>
          <Button text="Click to Vote" />
          <Display vote={10} />
          <Button text="Click to Unvote" />
        </div>
      </div>
    );
  }
}

class Button extends Component {
  render() {
    return <button>{this.props.text}</button>;
  }
}

class Display extends Component {
  render() {
    return (
      <h2>
        {this.props.vote === 0
          ? "MIN"
          : this.props.vote === 10
          ? "MAX"
          : this.props.vote}
      </h2>
    );
  }
}
