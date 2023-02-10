import React from "react"

export interface Props {
	title?: string
}

export const ExampleComponent = ({ title }: Props) => {
	return <h1>{title ?? "No Title"}</h1>
}
