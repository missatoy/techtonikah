export default function RetroWindow(props) {
  return (
    <div className={"retro-window p-1 " + props.className}>
      <div className="retro-header">
        <h5>{props.name}</h5>
        <h5 className="exit">x</h5>
      </div>
      <div className="retro-body p-2">
        {props.content}
      </div>
    </div>
  )
}
