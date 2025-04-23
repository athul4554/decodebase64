'use client';

import { Container, Title, Text, Stack, Paper, Code, List } from '@mantine/core';

export default function Base64JwtAuthentication() {
  return (
    <Container size="lg" py="xl">
      <Stack gap="xl">
        <div>
          <Text c="dimmed" mb="md">Published on April 3, 2024 · 6 min read</Text>
          <Title order={1} size="h1" mb="xs">
            Using Base64 in JWT Authentication
          </Title>
          <Text size="lg" c="dimmed">
            Explore how Base64 encoding is used in JSON Web Tokens (JWT) for secure API authentication.
          </Text>
        </div>

        <Paper p="xl" shadow="sm" withBorder>
          <Stack gap="lg">
            <section>
              <Title order={2} size="h2" mb="md">
                Understanding JWT Structure
              </Title>
              <Text>
                JSON Web Tokens (JWT) consist of three parts separated by dots: header, payload, and signature. 
                The header and payload are Base64Url encoded JSON objects, while the signature is created using 
                a secret key and the encoded header and payload.
              </Text>
              <Code block mb="md">
                {`// JWT Structure
header.payload.signature

// Example JWT
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIn0.
SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c`}
              </Code>
            </section>

            <section>
              <Title order={2} size="h2" mb="md">
                Base64Url vs Standard Base64
              </Title>
              <Text mb="md">
                JWTs use Base64Url encoding instead of standard Base64. The key differences are:
              </Text>
              <List spacing="sm" mb="lg">
                <List.Item>Replaces '+' with '-' in the encoding alphabet</List.Item>
                <List.Item>Replaces '/' with '_' in the encoding alphabet</List.Item>
                <List.Item>Removes padding '=' characters</List.Item>
                <List.Item>Makes the token safe for URLs and HTTP headers</List.Item>
              </List>
            </section>

            <section>
              <Title order={2} size="h2" mb="md">
                JWT Header and Payload
              </Title>
              <Text mb="md">The header typically contains the token type and signing algorithm:</Text>
              <Code block mb="lg">
                {`{
  "alg": "HS256",
  "typ": "JWT"
}`}
              </Code>
              <Text mb="md">The payload contains the claims (data) you want to transmit:</Text>
              <Code block mb="lg">
                {`{
  "sub": "1234567890",
  "name": "John Doe",
  "iat": 1516239022
}`}
              </Code>
            </section>

            <section>
              <Title order={2} size="h2" mb="md">
                Creating and Verifying JWTs
              </Title>
              <Text mb="md">Here's how to create and verify JWTs in JavaScript:</Text>
              <Code block mb="md">
                {`// Creating a JWT
const header = base64UrlEncode(JSON.stringify({
  alg: 'HS256',
  typ: 'JWT'
}));

const payload = base64UrlEncode(JSON.stringify({
  sub: '1234567890',
  name: 'John Doe',
  iat: Math.floor(Date.now() / 1000)
}));

const signature = HMACSHA256(
  \`\${header}.\${payload}\`,
  'your-secret-key'
);

const jwt = \`\${header}.\${payload}.\${signature}\`;`}
              </Code>
            </section>

            <section>
              <Title order={2} size="h2" mb="md">
                Security Best Practices
              </Title>
              <List spacing="sm">
                <List.Item>Always validate the signature before trusting the token</List.Item>
                <List.Item>Use strong secret keys for signing</List.Item>
                <List.Item>Include expiration times in your tokens</List.Item>
                <List.Item>Don't store sensitive information in the payload</List.Item>
                <List.Item>Use HTTPS to transmit tokens</List.Item>
                <List.Item>Implement token revocation when needed</List.Item>
              </List>
            </section>

            <section>
              <Title order={2} size="h2" mb="md">
                Common Pitfalls
              </Title>
              <List spacing="sm">
                <List.Item>Not validating the token signature</List.Item>
                <List.Item>Using weak secret keys</List.Item>
                <List.Item>Storing sensitive data in tokens</List.Item>
                <List.Item>Not handling token expiration</List.Item>
                <List.Item>Using tokens for long-term sessions</List.Item>
              </List>
            </section>
          </Stack>
        </Paper>
      </Stack>
    </Container>
  );
} 