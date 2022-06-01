import React from 'react';

const RegistrationBook = () => {
  return (
    <>
      <h2>Register books</h2>
      <form className="register-form">
        <input type="text" name="title" placeholder="Insert the title.." />
        <input type="text" name="author" placeholder="Insert the author.." />
        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default RegistrationBook;
