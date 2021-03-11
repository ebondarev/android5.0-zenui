interface Props {
  type: 'lock-screen' | 'main-screen';
}

export function Header(props: Props) {
  if (props.type === 'lock-screen') {
    return (
      <div>Header (lock-screen)</div>
    );
  }

  if (props.type === 'main-screen') {
    return (
      <div>Header (main-screen)</div>
    );
  }

  return (
    <div></div>
  );
}