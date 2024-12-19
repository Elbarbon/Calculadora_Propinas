import { Dispatch } from "react"
const tipOptions = [
    {
      id: 'tip-10',
      value: .10,
      label: '10%'
    },
    {
      id: 'tip-20',
      value: .20,
      label: '20%'
    },
    {
      id: 'tip-50',
      value: .50,
      label: '50%'
    },
  ]

type TipPorcentageFormProps = {
  setTip: Dispatch<React.SetStateAction<number>>,
  tip: number
}

export default function TipPorcentageForm({setTip, tip}: TipPorcentageFormProps) {
  return (
    <div>
        <h3 className="font-black text-2xl">Propina</h3>
        <form>
            {tipOptions.map(tipOption => (
                <div className="flex gap-2" key={tipOption.id}>
                    <label htmlFor="">{tipOption.label}</label>
                    <input
                        id={tipOption.id}
                        type='radio'
                        name='tip'
                        value={tipOption.value}
                        onChange={e => setTip(+e.target.value)} // The + sign is to convert the string to a number
                        checked={tipOption.value === tip }
                    />
                </div>
            ))}
        </form>
    </div>
  )
}
