import { useState } from 'react';
import { send } from 'emailjs-com';

export default function FormArts() {
  const [toSend, setToSend] = useState({
    from_name: '',
    message: '',
    reply_to: ''
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      'service_9ep6ci5',
      'template_k9eiewi',
      toSend,
      'wykSGAUlwFm70XgkW'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
    setToSend({
      from_name: '',
      message: '',
      reply_to: ''
    })
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div className="row justify-content-center">
      <form onSubmit={onSubmit} className="col-lg-4 col-sm-12 row">
        <div className="form-group d-flex flex-column">
          <label htmlFor="name">Name</label>
          <input
            type='text'
            name='from_name'
            placeholder='Your name'
            id="name"
            value={toSend.from_name}
            onChange={handleChange}
            className="mb-3 form-field"
            required
          />
        </div>
        <div className="form-group d-flex flex-column">
          <label htmlFor="message">Message</label>
          <input
            type='text'
            name='message'
            placeholder='Your message'
            id="message"
            value={toSend.message}
            onChange={handleChange}
            className="mb-3 form-field"
            required
          />
        </div>
        <div className="form-group d-flex flex-column">
          <label htmlFor="email">Email</label>
          <input
            type='email'
            name='reply_to'
            placeholder='Your email'
            id="email"
            value={toSend.reply_to}
            onChange={handleChange}
            className="mb-3 form-field"
            required
          />
        </div>
        <div className="form-group">
          <button type='submit' className="form-button">Submit</button>
        </div>
      </form>
    </div>
  )
}
