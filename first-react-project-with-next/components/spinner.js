export default function spinner(props){
  // This will set a default tailwind color for the spinner, 
  // that can be overwritten with a prop
  let color = 'bg-red-500';
  if(props.color){
    color = props.color
  }

  return <div>
    <div className="lds-facebook">
      <div className={color}></div>
      <div className={color}></div>
      <div className={color}></div>
    </div>
  </div>
} 