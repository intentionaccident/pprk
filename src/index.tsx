import "./styles/main.scss"

import * as React from "react"
import { createRoot } from "react-dom/client"

const rootElement = document.createElement("div")
document.body.appendChild(rootElement)
const root = createRoot(rootElement)
root.render(
	<React.StrictMode>
		<div>
			Hello World
		</div>
	</React.StrictMode>,
)
