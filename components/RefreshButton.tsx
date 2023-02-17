type Props = {
  onClick: () => void;
};

function RefreshButton({ onClick }: Props) {
  return <button onClick={onClick}>RefreshButton</button>;
}

export default RefreshButton;
