import React from "react"
import { test, expect } from "@playwright/experimental-ct-react"
import { Default } from "./index.stories"

test("ExampleComponent", async ({ mount }) => {
	const component = await mount(<Default />)

	await expect(component).toContainText("Value: 10")

	await component.locator("text=Increment").click()
	await expect(component).toContainText("Value: 11")
})
