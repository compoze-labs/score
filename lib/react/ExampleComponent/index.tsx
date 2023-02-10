import React, { useState } from "react"

export interface Props {
	initialValue?: number
}

export const ExampleComponent = ({ initialValue }: Props) => {
	const [value, setValue] = useState(initialValue ?? 0)

	return (
		<div>
			<p>Value: {value}</p>
			<button onClick={() => setValue((prev) => prev + 1)}>Increment</button>
		</div>
	)
}
