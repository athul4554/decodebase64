'use client';

import { Container, Title, Text, Stack, Paper, Code, List } from '@mantine/core';

export default function UnderstandingBase64() {
  return (
    <Container size="lg" py="xl">
      <Stack gap="xl">
        <div>
          <Text c="dimmed" mb="md">Published on April 3, 2024 · 8 min read</Text>
          <Title order={1} size="h1" mb="xs">
            Understanding Base64 Encoding: A Complete Guide
          </Title>
          <Text size="lg" c="dimmed">
            Learn everything about Base64 encoding, its uses, and how it works under the hood.
          </Text>
        </div>

        <Paper p="xl" shadow="sm" withBorder>
          <Stack gap="lg">
            <section>
              <Title order={2} size="h2" mb="md">
                What is Base64 Encoding?
              </Title>
              <Text>
                Base64 is a binary-to-text encoding scheme that represents binary data using a set of 64 characters. 
                It's widely used in modern web development and data transmission to ensure that binary data can be 
                safely transmitted across systems that only handle ASCII text.
              </Text>
            </section>

            <section>
              <Title order={2} size="h2" mb="md">
                How Does Base64 Work?
              </Title>
              <Text mb="md">
                Base64 encoding works by converting every 3 bytes of binary data into 4 Base64 characters. Here's the process:
              </Text>
              <List spacing="sm" mb="lg">
                <List.Item>Each Base64 digit represents 6 bits of data (2⁶ = 64 possible values)</List.Item>
                <List.Item>3 bytes (24 bits) of binary data are split into 4 groups of 6 bits</List.Item>
                <List.Item>Each 6-bit group is converted to a corresponding Base64 character</List.Item>
                <List.Item>If the input length isn't divisible by 3, padding ('=') is added</List.Item>
              </List>
              <Code block mb="md">
                {`// Example in JavaScript
const text = 'Hello';
const encoded = btoa(text);  // 'SGVsbG8='
const decoded = atob(encoded);  // 'Hello'`}
              </Code>
            </section>

            <section>
              <Title order={2} size="h2" mb="md">
                Common Use Cases
              </Title>
              <List spacing="sm">
                <List.Item>
                  <Text fw={500}>Data URIs</Text>
                  <Text size="sm">Embedding images, fonts, or other binary files directly in HTML/CSS</Text>
                </List.Item>
                <List.Item>
                  <Text fw={500}>API Authentication</Text>
                  <Text size="sm">Encoding credentials in Basic Authentication headers</Text>
                </List.Item>
                <List.Item>
                  <Text fw={500}>JWT Tokens</Text>
                  <Text size="sm">Encoding JSON data in JSON Web Tokens</Text>
                </List.Item>
                <List.Item>
                  <Text fw={500}>Email Attachments</Text>
                  <Text size="sm">MIME encoding for email attachments</Text>
                </List.Item>
              </List>
            </section>

            <section>
              <Title order={2} size="h2" mb="md">
                Best Practices
              </Title>
              <List spacing="sm">
                <List.Item>Always validate Base64 strings before decoding</List.Item>
                <List.Item>Use URL-safe Base64 for web applications (replace + with - and / with _)</List.Item>
                <List.Item>Consider the 33% size increase when encoding data</List.Item>
                <List.Item>Don't use Base64 for encryption (it's encoding, not encryption)</List.Item>
                <List.Item>Handle encoding errors gracefully</List.Item>
              </List>
            </section>

            <section>
              <Title order={2} size="h2" mb="md">
                Performance Considerations
              </Title>
              <Text mb="md">
                While Base64 encoding is relatively fast, there are some performance considerations to keep in mind:
              </Text>
              <List spacing="sm">
                <List.Item>Encoding increases data size by approximately 33%</List.Item>
                <List.Item>Large Base64 strings can impact JavaScript memory usage</List.Item>
                <List.Item>Consider streaming for large files instead of Base64 encoding</List.Item>
                <List.Item>Cache encoded results when possible</List.Item>
              </List>
            </section>
          </Stack>
        </Paper>
      </Stack>
    </Container>
  );
} 