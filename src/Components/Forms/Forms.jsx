import { useState } from "react";
import Button from "../Button/Button";
import { v4 as uuidv4 } from "uuid";
import { Form, Label, Input } from "./Forms.styles";

export default function Forms({ onSubmit }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case "name":
        setName(value);
        break;

      case "number":
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit({ name, number });
    reset();
  };

  const reset = () => {
    setName("");
    setNumber("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name
        <Input
          id={uuidv4()}
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </Label>

      <Label>
        Number
        <Input
          id={uuidv4()}
          type="number"
          name="number"
          value={number}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </Label>

      <Button type="submit" text="Add contact" />
    </Form>
  );
}

// class OldForms extends Component {
// state = {
//   name: "",
//   number: "",
// };

// handleChange = (event) => {
//   const { name, value } = event.currentTarget;
//   this.setState({
//     [name]: value,
//   });
// };

// handleSubmit = (event) => {
//   event.preventDefault();

//   this.props.onSubmit(this.state);
//   this.reset();
// };

// reset = () => {
//   this.setState({
//     name: "",
//     number: "",
//   });
// };

//   render() {
//     const { name, number } = this.state;
//     return (
//       <Form onSubmit={this.handleSubmit}>
//         <Label>
//           Name
//           <Input
//             id={uuidv4()}
//             type="text"
//             name="name"
//             value={name}
//             onChange={this.handleChange}
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
//             required
//           />
//         </Label>

//         <Label>
//           Number
//           <Input
//             id={uuidv4()}
//             type="number"
//             name="number"
//             value={number}
//             onChange={this.handleChange}
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
//             required
//           />
//         </Label>

//         <Button type="submit" text="Add contact" />
//       </Form>
//     );
//   }
// }

// export default Forms;
