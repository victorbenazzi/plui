export function Container(props) {
  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center justify-between max-w-[1245px] px-4">
        {props.children}
      </div>
    </div>
  );
}
