import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function MyForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:3001/api/posts`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    console.log(data);
    // You can replace console.log with your own function to update the state with the retrieved data
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default MyForm;





// import React, { useState } from 'react';
// import { Form, Button } from 'react-bootstrap';

// function ContactForm() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
//     // You can replace console.log with your own function to send the data to a server or perform any other action
//   };
//   fetch('http://localhost:3001/')
//   .then(response => response.text())
//   .then(data => console.log(data))
//   .catch(error => console.error(error));


//   return (
//     <Form onSubmit={handleSubmit} className="mb-3">
//       <Form.Group controlId="formName">
//         <Form.Label>Name</Form.Label>
//         <Form.Control
//           type="text"
//           placeholder="Enter name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//       </Form.Group>

//       <Form.Group controlId="formEmail"className="mb-3">
//         <Form.Label>Email address</Form.Label>
//         <Form.Control
//           type="email"
//           placeholder="Enter email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//       </Form.Group>

//       <Form.Group controlId="formMessage"className="mb-3">
//         <Form.Label>Message</Form.Label>
//         <Form.Control
//           as="textarea"
//           rows={3}
//           placeholder="Enter message"
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//         />
//       </Form.Group>

//       <Button variant="primary" type="submit">
//         Submit
//       </Button>
//     </Form>
//   );
// }

// export default ContactForm;


// // import Button from 'react-bootstrap/Button';
// // import Form from 'react-bootstrap/Form';

// // function MyForm() {
// //   return (
// //     <Form>
// //       <Form.Group className="mb-3" controlId="formBasicEmail">
// //         <Form.Label>Email address</Form.Label>
// //         <Form.Control type="email" placeholder="Enter email" />
// //         <Form.Text className="text-muted">
// //           We'll never share your email with anyone else.
// //         </Form.Text>
// //       </Form.Group>

// //       <Form.Group className="mb-3" controlId="formBasicPassword">
// //         <Form.Label>Password</Form.Label>
// //         <Form.Control type="password" placeholder="Password" />
// //       </Form.Group>
// //       <Form.Group className="mb-3" controlId="formBasicCheckbox">
// //         <Form.Check type="checkbox" label="Check me out" />
// //       </Form.Group>
// //       <Button variant="btn btn-secondary" type="submit">
// //         Submit
// //       </Button>
// //     </Form>
// //   );
// // }

// // export default MyForm;