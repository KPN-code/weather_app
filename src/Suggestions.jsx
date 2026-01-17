const Suggestions = ({ items, onSelect }) => {
  if (!items.length) return null;

  return (
    <ul className="suggestions">
      {items.map((item) => (
        <li key={item.id} onClick={() => onSelect(item.name)}>
          {item.name}, {item.country}
        </li>
      ))}
    </ul>
  );
};

export default Suggestions;
