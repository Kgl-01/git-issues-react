import "./labels.component.scss";

const Label = ({ labels }) => {
  return (
    <div className="label-item">
      {labels.map((label) => (
        <p
          className="label"
          key={label.id}
          style={{ backgroundColor: `#${label.color}` }}
        >
          {label.name}
        </p>
      ))}
    </div>
  );
};

export default Label;
