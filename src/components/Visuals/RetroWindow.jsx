export default function RetroWindow(props) {
  return (
    <div className="retro-window p-1">
      <div className="retro-header">
        <h5>{props.name}</h5>
        <h5 className="exit">x</h5>
      </div>
      <div className="retro-body p-1">
        {props.text}
      </div>
    </div>
  )
}
