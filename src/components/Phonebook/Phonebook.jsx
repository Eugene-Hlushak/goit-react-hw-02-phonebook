import { nanoid } from 'nanoid';
export default function Phonebook({
  handleSubmit,
  name,
  handleChange,
  contacts,
}) {
  return (
    <>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={name}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>

      <ul>
        {contacts.map(contact => (
          <li key={nanoid()}>{contact}</li>
        ))}
      </ul>
    </>
  );
}
