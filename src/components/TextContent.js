export default function TextContent(props) {
  return (
    <>
      <h2>{props.header}</h2>
      {props.description && <p>{props.description}</p>}
    </>
  );
}
