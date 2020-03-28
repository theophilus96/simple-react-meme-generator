const React = require("react");

const Link = require("react-router-dom").Link;

const Component = React.Component;

class MemeGenerator extends Component {
  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
      randomImg: "http://i.imgflip.com/1bij.jpg",
      allMemeImgs: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(response => {
        const { memes } = response.data;
        this.setState({
          allMemeImgs: memes
        });
      });
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }
  /**
   * Create a method that, when the "Gen" button is clicked, chooses one of the
   * memes from our `allMemeImgs` array at random and makes it so that is the
   * meme image that shows up in the bottom portion of our meme generator site (`.url`)
   */

  handleSubmit(event) {
    event.preventDefault();
    const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length);
    const randMemeImg = this.state.allMemeImgs[randNum].url;
    this.setState({
      randomImg: randMemeImg
    });
  }

  render() {
    return /*#__PURE__*/ React.createElement(
      "div",
      null,
      /*#__PURE__*/ React.createElement(
        "form",
        {
          className: "meme-form",
          onSubmit: this.handleSubmit
        },
        /*#__PURE__*/ React.createElement("input", {
          type: "text",
          name: "topText",
          placeholder: "Top Text",
          value: this.state.topText,
          onChange: this.handleChange
        }),
        /*#__PURE__*/ React.createElement("input", {
          type: "text",
          name: "bottomText",
          placeholder: "Bottom Text",
          value: this.state.bottomText,
          onChange: this.handleChange
        }),
        /*#__PURE__*/ React.createElement("button", null, "Gen")
      ),
      /*#__PURE__*/ React.createElement(
        "div",
        {
          className: "meme"
        },
        /*#__PURE__*/ React.createElement("img", {
          src: this.state.randomImg,
          alt: ""
        }),
        /*#__PURE__*/ React.createElement(
          "h2",
          {
            className: "top"
          },
          this.state.topText
        ),
        /*#__PURE__*/ React.createElement(
          "h2",
          {
            className: "bottom"
          },
          this.state.bottomText
        )
      )
    );
  }
}

module.exports = MemeGenerator;
