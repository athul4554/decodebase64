'use client';

import { Container, Title, Text, Stack, List, Paper, Divider } from '@mantine/core';

export default function PrivacyPolicy() {
  const lastUpdated = 'April 3, 2024';

  return (
    <Container size="lg" py="xl">
      <Stack gap="xl">
        <div>
          <Title order={1} size="h1" mb="xs">
            Privacy Policy
          </Title>
          <Text c="dimmed">Last Updated: {lastUpdated}</Text>
        </div>

        <Paper p="xl" shadow="sm" withBorder>
          <Stack gap="lg">
            <section>
              <Title order={2} size="h3" mb="md">
                1. Introduction
              </Title>
              <Text size="sm">
                Welcome to Base64 Decode. We respect your privacy and are committed to protecting your personal data. This privacy policy explains how we handle any information when you visit our website.
              </Text>
            </section>

            <Divider />

            <section>
              <Title order={2} size="h3" mb="md">
                2. Data We Process
              </Title>
              <Text size="sm" mb="sm">
                Our Base64 encoding/decoding service operates entirely within your browser. We:
              </Text>
              <List size="sm" spacing="xs">
                <List.Item>Do not collect or store any data you encode or decode</List.Item>
                <List.Item>Do not transmit your data to any servers</List.Item>
                <List.Item>Process all operations locally in your web browser</List.Item>
              </List>
            </section>

            <Divider />

            <section>
              <Title order={2} size="h3" mb="md">
                3. Cookies and Analytics
              </Title>
              <Text size="sm" mb="sm">
                We use essential cookies and analytics to improve our service:
              </Text>
              <List size="sm" spacing="xs">
                <List.Item>Essential cookies for website functionality</List.Item>
                <List.Item>Google Analytics to understand user behavior (anonymized)</List.Item>
                <List.Item>No third-party advertising cookies</List.Item>
              </List>
            </section>

            <Divider />

            <section>
              <Title order={2} size="h3" mb="md">
                4. Information We Collect
              </Title>
              <Text size="sm" mb="sm">
                We automatically collect:
              </Text>
              <List size="sm" spacing="xs">
                <List.Item>IP addresses (anonymized)</List.Item>
                <List.Item>Browser type and version</List.Item>
                <List.Item>Operating system information</List.Item>
                <List.Item>Page visit timestamps</List.Item>
                <List.Item>Usage statistics (anonymized)</List.Item>
              </List>
            </section>

            <Divider />

            <section>
              <Title order={2} size="h3" mb="md">
                5. How We Use Your Information
              </Title>
              <Text size="sm" mb="sm">
                We use collected information to:
              </Text>
              <List size="sm" spacing="xs">
                <List.Item>Improve our website functionality</List.Item>
                <List.Item>Analyze usage patterns</List.Item>
                <List.Item>Fix technical issues</List.Item>
                <List.Item>Enhance user experience</List.Item>
              </List>
            </section>

            <Divider />

            <section>
              <Title order={2} size="h3" mb="md">
                6. Data Security
              </Title>
              <Text size="sm">
                We implement appropriate security measures to protect against unauthorized access, alteration, disclosure, or destruction of information. All operations are performed locally in your browser, ensuring your data never leaves your device.
              </Text>
            </section>

            <Divider />

            <section>
              <Title order={2} size="h3" mb="md">
                7. Your Rights
              </Title>
              <Text size="sm" mb="sm">
                You have the right to:
              </Text>
              <List size="sm" spacing="xs">
                <List.Item>Access your personal data</List.Item>
                <List.Item>Request data deletion</List.Item>
                <List.Item>Opt-out of analytics</List.Item>
                <List.Item>Disable cookies via browser settings</List.Item>
              </List>
            </section>
          </Stack>
        </Paper>
      </Stack>
    </Container>
  );
} 