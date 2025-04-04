'use client';

import { Container, Title, Text, Stack, List, Paper, Divider } from '@mantine/core';

export default function TermsOfService() {
  const lastUpdated = 'April 3, 2024';

  return (
    <Container size="lg" py="xl">
      <Stack gap="xl">
        <div>
          <Title order={1} size="h1" mb="xs">
            Terms of Service
          </Title>
          <Text c="dimmed">Last Updated: {lastUpdated}</Text>
        </div>

        <Paper p="xl" shadow="sm" withBorder>
          <Stack gap="lg">
            <section>
              <Title order={2} size="h3" mb="md">
                1. Acceptance of Terms
              </Title>
              <Text size="sm">
                By accessing and using Base64 Decode (the "Service"), you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our Service.
              </Text>
            </section>

            <Divider />

            <section>
              <Title order={2} size="h3" mb="md">
                2. Description of Service
              </Title>
              <Text size="sm" mb="sm">
                Base64 Decode provides:
              </Text>
              <List size="sm" spacing="xs">
                <List.Item>Online Base64 encoding and decoding functionality</List.Item>
                <List.Item>Browser-based data processing</List.Item>
                <List.Item>Free access to basic encoding/decoding features</List.Item>
              </List>
            </section>

            <Divider />

            <section>
              <Title order={2} size="h3" mb="md">
                3. Use of Service
              </Title>
              <Text size="sm" mb="sm">
                You agree to:
              </Text>
              <List size="sm" spacing="xs">
                <List.Item>Use the Service for lawful purposes only</List.Item>
                <List.Item>Not attempt to circumvent any security features</List.Item>
                <List.Item>Not use the Service to process sensitive or confidential information</List.Item>
                <List.Item>Not overload or disrupt the Service</List.Item>
              </List>
            </section>

            <Divider />

            <section>
              <Title order={2} size="h3" mb="md">
                4. Intellectual Property
              </Title>
              <Text size="sm">
                All content, features, and functionality of the Service, including but not limited to text, graphics, logos, and code, are the exclusive property of Base64 Decode and are protected by international copyright, trademark, and other intellectual property laws.
              </Text>
            </section>

            <Divider />

            <section>
              <Title order={2} size="h3" mb="md">
                5. Disclaimer of Warranties
              </Title>
              <Text size="sm" mb="sm">
                The Service is provided "as is" and "as available" without any warranties of any kind, including:
              </Text>
              <List size="sm" spacing="xs">
                <List.Item>No guarantee of uninterrupted or error-free service</List.Item>
                <List.Item>No warranty regarding the accuracy of results</List.Item>
                <List.Item>No security guarantees for data processing</List.Item>
                <List.Item>Base64 encoding is not encryption and should not be used for security purposes</List.Item>
              </List>
            </section>

            <Divider />

            <section>
              <Title order={2} size="h3" mb="md">
                6. Limitation of Liability
              </Title>
              <Text size="sm">
                Base64 Decode shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use the Service. This includes any loss of data, profits, or business opportunities.
              </Text>
            </section>

            <Divider />

            <section>
              <Title order={2} size="h3" mb="md">
                7. Privacy and Data Processing
              </Title>
              <Text size="sm" mb="sm">
                Regarding data processing:
              </Text>
              <List size="sm" spacing="xs">
                <List.Item>All encoding/decoding is performed locally in your browser</List.Item>
                <List.Item>We do not store or transmit your input data</List.Item>
                <List.Item>Usage analytics are collected anonymously</List.Item>
                <List.Item>See our Privacy Policy for complete details</List.Item>
              </List>
            </section>

            <Divider />

            <section>
              <Title order={2} size="h3" mb="md">
                8. Modifications to Service
              </Title>
              <Text size="sm">
                We reserve the right to modify, suspend, or discontinue any part of the Service at any time without notice. We may also update these Terms of Service at our discretion. Continued use of the Service after any changes constitutes acceptance of the new terms.
              </Text>
            </section>
          </Stack>
        </Paper>
      </Stack>
    </Container>
  );
} 