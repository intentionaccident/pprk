import "./styles/main.scss"
import "./i18n"

import * as React from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Route, Routes } from "react-router"
import { PageScaffold } from "./components/PageScaffold"
import { IndexPage } from "./components/IndexPage"
import { FAQPage } from "./components/FAQPage"

const rootElement = document.createElement("div")
document.body.appendChild(rootElement)
const root = createRoot(rootElement)
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route element={<PageScaffold />}>
					<Route path="/" element={<IndexPage />} />
					<Route path="/faq" element={<FAQPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>,
)
