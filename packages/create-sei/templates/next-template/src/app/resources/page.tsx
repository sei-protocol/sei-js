import { developerResources, socialLinks } from '@/app/resources/resources';
import { Shell } from '@/components';
import { Card, Code, Container, Group, Paper, SimpleGrid, Stack, Text, ThemeIcon, Title } from '@mantine/core';
import { IconBook, IconRobot, IconTerminal } from '@tabler/icons-react';

export default function ResourcesPage() {
	return (
		<Shell>
			<Container size="lg" py="xl">
				<Stack gap="xl">
					{/* Header */}
					<div>
						<Group gap="md" align="center" mb="lg">
							<ThemeIcon size={48} radius="md" c="grape" variant="light">
								<IconBook size={24} />
							</ThemeIcon>
							<div>
								<Title order={1} fw={700} c="gray.9">
									Developer Resources
								</Title>
								<Text size="lg" c="gray.6" mt={4}>
									Everything you need to build on Sei. Documentation, tools, community links, and development guides.
								</Text>
							</div>
						</Group>
					</div>

					{/* Documentation & Tools */}
					<Card shadow="sm" padding="xl" radius="lg" withBorder>
						<Stack gap="lg">
							<Title order={2} size="h3" fw={600} c="gray.8">
								📚 Documentation & Tools
							</Title>
							<SimpleGrid cols={{ base: 1, sm: 2, lg: 2 }} spacing="lg">
								{developerResources.map(({ title, description, href, icon: Icon, color }) => (
									<Card key={title} withBorder radius="lg" p="xl" component="a" href={href} target="_blank" rel="noreferrer" shadow="sm">
										<Group align="flex-start" wrap="nowrap" gap="md">
											<ThemeIcon variant="light" color={color} size={40} radius="md">
												<Icon size={22} />
											</ThemeIcon>
											<Stack gap={6} flex={1}>
												<Text fw={600} size="lg" c="gray.9">
													{title}
												</Text>
												<Text size="sm" c="dimmed" lh={1.5}>
													{description}
												</Text>
											</Stack>
										</Group>
									</Card>
								))}
							</SimpleGrid>
						</Stack>
					</Card>

					{/* MCP Server */}
					<Card shadow="sm" padding="xl" radius="lg" withBorder>
						<Stack gap="lg">
							<Title order={2} size="h3" fw={600} c="gray.8">
								🤖 AI Development Tools
							</Title>
							<Card withBorder radius="lg" p="xl" shadow="sm">
								<Stack gap="lg">
									<Stack gap="xs">
										<Group gap="md">
											<ThemeIcon size={40} radius="md" color="orange" variant="light">
												<IconRobot size={20} />
											</ThemeIcon>
											<Title order={4} fw={600} c="gray.9">
												Sei MCP Server
											</Title>
										</Group>
										<Text size="sm" c="dimmed" lh={1.5} maw={500}>
											Teach your IDE or LLM how to be an expert on Sei through the Model Context Protocol (MCP).
										</Text>
									</Stack>

									<Paper p="md" radius="md" withBorder bg="gray.0">
										<Stack gap="sm">
											<Group gap="xs">
												<IconTerminal size={16} color="var(--mantine-color-gray-6)" />
												<Text size="xs" fw={500} c="dimmed">
													Configuration
												</Text>
											</Group>
											<Code block bg="white" p="md">
												{`{
  "mcpServers": {
    "sei": {
      "command": "npx",
      "args": ["-y", "@sei-js/mcp-server"]
    }
  }
}`}
											</Code>
										</Stack>
									</Paper>

									<SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
										<Card withBorder radius="md" p="md" component="a" href="https://sei-js.docs.sei.io/mcp-server/quickstart" target="_blank" rel="noreferrer">
											<Group gap="sm">
												<ThemeIcon size={32} radius="md" color="orange" variant="light">
													<IconBook size={16} />
												</ThemeIcon>
												<Stack gap={2} flex={1}>
													<Text fw={600} size="sm" c="gray.9">
														Quickstart Guide
													</Text>
													<Text size="xs" c="dimmed">
														Get started with MCP setup
													</Text>
												</Stack>
											</Group>
										</Card>
										<Card
											withBorder
											radius="md"
											p="md"
											component="a"
											href="https://sei-js.docs.sei.io/mcp-server/environment-variables"
											target="_blank"
											rel="noreferrer"
										>
											<Group gap="sm">
												<ThemeIcon size={32} radius="md" color="orange" variant="light">
													<IconTerminal size={16} />
												</ThemeIcon>
												<Stack gap={2} flex={1}>
													<Text fw={600} size="sm" c="gray.9">
														Environment Variables
													</Text>
													<Text size="xs" c="dimmed">
														Configure your setup
													</Text>
												</Stack>
											</Group>
										</Card>
									</SimpleGrid>
								</Stack>
							</Card>
						</Stack>
					</Card>

					{/* Community & Social */}
					<Card shadow="sm" padding="xl" radius="lg" withBorder>
						<Stack gap="lg">
							<Title order={2} size="h3" fw={600} c="gray.8">
								🌐 Community & Social
							</Title>
							<SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="lg">
								{socialLinks.map(({ title, description, href, icon: Icon, color }) => (
									<Card key={title} withBorder radius="lg" p="lg" component="a" href={href} target="_blank" rel="noreferrer" shadow="sm">
										<Group align="flex-start" wrap="nowrap" gap="md">
											<ThemeIcon variant="light" color={color === 'dark' ? 'gray' : (color as any)} size={36} radius="md">
												<Icon size={20} />
											</ThemeIcon>
											<Stack gap={4} flex={1}>
												<Text fw={600} c="gray.9">
													{title}
												</Text>
												<Text size="sm" c="dimmed" lh={1.4}>
													{description}
												</Text>
											</Stack>
										</Group>
									</Card>
								))}
							</SimpleGrid>
						</Stack>
					</Card>
				</Stack>
			</Container>
		</Shell>
	);
}
