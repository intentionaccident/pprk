import * as React from "react"

const DISCORD_URL = "https://discord.gg/NXYNduuCkd"

export const DiscordLink: React.FC<React.PropsWithChildren> = ({ children }) => {
	return (
		<a href={DISCORD_URL} target="_blank" rel="noopener noreferrer">
			{children ? children : "Discord"}
		</a>
	)
}
