import React from "react"
import { StoryFn, Meta } from "@storybook/react"
import { ExampleComponent } from "."

export default {
	component: ExampleComponent,
} as Meta

export const Default: StoryFn = () => <ExampleComponent initialValue={10} />
