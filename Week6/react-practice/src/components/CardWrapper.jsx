export default function CardWrapper({innerComponent: InnerComponent}) {
  return (
    <div style={{border: "2px solid black"}}><InnerComponent /></div>
  )
}
