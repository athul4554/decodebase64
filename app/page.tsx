'use client';

import { useState, useEffect } from 'react';
import {
  Container,
  Title,
  Tabs,
  Textarea,
  Button,
  Text,
  Paper,
  Group,
  ActionIcon,
  Stack,
  Alert,
  CopyButton,
  List,
  Accordion,
} from '@mantine/core';
import { IconCopy, IconCheck, IconAlertCircle, IconBookmark, IconX } from '@tabler/icons-react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';

export default function Home() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState<string>('decode');
  const [showBookmark, setShowBookmark] = useState(true);

  useEffect(() => {
    Prism.highlightAll();
  }, [output]);

  const handleTabChange = (value: string | null) => {
    if (value) {
      setActiveTab(value);
      setInput('');
      setOutput('');
      setError('');
    }
  };

  const handleProcess = () => {
    setError('');
    try {
      if (activeTab === 'decode') {
        const decoded = atob(input.trim());
        setOutput(decoded);
      } else {
        const encoded = btoa(input);
        setOutput(encoded);
      }
    } catch (err) {
      setError(
        activeTab === 'decode'
          ? 'Invalid Base64 string. Please check your input.'
          : 'Unable to encode the input. Please check for invalid characters.'
      );
      setOutput('');
    }
  };

  const handleClear = () => {
    setInput('');
    setOutput('');
    setError('');
  };

  return (
    <Container size="lg" py="xl">
      <Stack gap="xl">
        {showBookmark && (
          <Alert
            icon={<IconBookmark size="1.1rem" />}
            color="blue"
            variant="light"
            title="Quick Access Tip!"
            withCloseButton
            onClose={() => setShowBookmark(false)}
          >
            <Group justify="space-between" align="center">
              <Text size="sm">
                🌟 Bookmark this page (Press Ctrl+D or ⌘+D) for quick access to our Base64 encoder/decoder tool. Save time on your next visit!
              </Text>
            </Group>
          </Alert>
        )}

        <div>
          <Title order={1} size="h1" mb="xs">
            Base64 Decode & Encode
          </Title>
          <Text c="dimmed" size="lg">
            A fast, secure online tool for developers to decode and encode Base64 strings
          </Text>
        </div>

        <Paper shadow="sm" p="md" radius="md" withBorder>
          <Tabs value={activeTab} onChange={handleTabChange} mb="md">
            <Tabs.List grow>
              <Tabs.Tab value="decode">Decode Base64</Tabs.Tab>
              <Tabs.Tab value="encode">Encode to Base64</Tabs.Tab>
            </Tabs.List>
          </Tabs>

          <Stack gap="md">
            <Textarea
              placeholder={
                activeTab === 'decode'
                  ? 'Enter Base64 string to decode...'
                  : 'Enter text to encode...'
              }
              minRows={5}
              maxRows={10}
              autosize
              value={input}
              onChange={(e) => setInput(e.currentTarget.value)}
            />

            <Group>
              <Button onClick={handleProcess} size="md">
                {activeTab === 'decode' ? 'Decode' : 'Encode'}
              </Button>
              <Button variant="light" onClick={handleClear} size="md">
                Clear
              </Button>
            </Group>

            {error && (
              <Alert icon={<IconAlertCircle size="1rem" />} color="red" variant="light">
                {error}
              </Alert>
            )}

            <Paper p="md" radius="md" withBorder>
              <Group justify="space-between" mb="xs">
                <Text fw={500}>Result:</Text>
                {output && (
                  <CopyButton value={output} timeout={2000}>
                    {({ copied, copy }) => (
                      <ActionIcon color={copied ? 'teal' : 'gray'} onClick={copy}>
                        {copied ? <IconCheck size="1rem" /> : <IconCopy size="1rem" />}
                      </ActionIcon>
                    )}
                  </CopyButton>
                )}
              </Group>
              <Text component="pre" style={{ margin: 0, minHeight: '1.5rem' }}>
                {output || 'Your result will appear here'}
              </Text>
            </Paper>
          </Stack>
        </Paper>

        <Stack gap="xl">
          <Paper shadow="sm" p="md" radius="md" withBorder>
            <Title order={2} size="h3" mb="lg">
              Understanding Base64 Encoding and Decoding
            </Title>

            <Text size="md" mb="md">
              Base64 is a crucial encoding method in modern web development and data transmission. It converts binary data into a text format using a set of 64 characters, making it safe to transfer data across systems that only handle ASCII text.
            </Text>

            <Accordion variant="separated" radius="md">
              <Accordion.Item value="what-is-base64">
                <Accordion.Control>
                  <Text fw={500}>What is Base64?</Text>
                </Accordion.Control>
                <Accordion.Panel>
                  <Text size="sm" mb="md">
                    Base64 is a binary-to-text encoding scheme that represents binary data using a set of 64 characters. The character set includes:
                  </Text>
                  <List size="sm" mb="md">
                    <List.Item>Uppercase letters (A-Z): 26 characters</List.Item>
                    <List.Item>Lowercase letters (a-z): 26 characters</List.Item>
                    <List.Item>Numbers (0-9): 10 characters</List.Item>
                    <List.Item>Special characters (+, /): 2 characters</List.Item>
                    <List.Item>Padding character (=): Used for alignment</List.Item>
                  </List>
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item value="common-uses">
                <Accordion.Control>
                  <Text fw={500}>Common Uses of Base64</Text>
                </Accordion.Control>
                <Accordion.Panel>
                  <List size="sm">
                    <List.Item>Embedding images in HTML/CSS (Data URIs)</List.Item>
                    <List.Item>Email attachments (MIME encoding)</List.Item>
                    <List.Item>API authentication (Basic Auth headers)</List.Item>
                    <List.Item>Storing binary data in JSON</List.Item>
                    <List.Item>URL-safe data transmission</List.Item>
                    <List.Item>SSL certificates and cryptographic applications</List.Item>
                    <List.Item>Database BLOB storage optimization</List.Item>
                  </List>
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item value="advantages">
                <Accordion.Control>
                  <Text fw={500}>Advantages and Features</Text>
                </Accordion.Control>
                <Accordion.Panel>
                  <List size="sm">
                    <List.Item>Universal compatibility across different systems</List.Item>
                    <List.Item>Safe transmission of binary data as text</List.Item>
                    <List.Item>No data loss during encoding/decoding</List.Item>
                    <List.Item>Platform and language-independent</List.Item>
                    <List.Item>Widely supported in programming languages</List.Item>
                    <List.Item>Ideal for embedding binary data in text formats</List.Item>
                  </List>
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item value="technical-details">
                <Accordion.Control>
                  <Text fw={500}>Technical Details</Text>
                </Accordion.Control>
                <Accordion.Panel>
                  <Text size="sm" mb="md">
                    Base64 encoding works by converting every 3 bytes of binary data into 4 Base64 characters:
                  </Text>
                  <List size="sm">
                    <List.Item>Each Base64 digit represents 6 bits of data</List.Item>
                    <List.Item>3 bytes (24 bits) of binary data convert to 4 Base64 characters</List.Item>
                    <List.Item>Padding (=) is added when input length is not divisible by 3</List.Item>
                    <List.Item>The output is approximately 33% larger than the input</List.Item>
                    <List.Item>URL-safe variants replace + and / with - and _</List.Item>
                  </List>
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item value="best-practices">
                <Accordion.Control>
                  <Text fw={500}>Best Practices and Tips</Text>
                </Accordion.Control>
                <Accordion.Panel>
                  <List size="sm">
                    <List.Item>Always validate Base64 strings before decoding</List.Item>
                    <List.Item>Consider URL-safe encoding for web applications</List.Item>
                    <List.Item>Be aware of the 33% size increase when encoding</List.Item>
                    <List.Item>Use appropriate padding for correct decoding</List.Item>
                    <List.Item>Handle encoding errors gracefully</List.Item>
                    <List.Item>Consider compression before encoding large data</List.Item>
                  </List>
                </Accordion.Panel>
              </Accordion.Item>
            </Accordion>
          </Paper>

          <Paper shadow="sm" p="md" radius="md" withBorder>
            <Title order={2} size="h3" mb="md">
              Developer Resources
            </Title>
            <Text size="sm" mb="md">
              Base64 encoding and decoding is essential in modern web development. Here are some common scenarios and code examples:
            </Text>

            <Text fw={500} mt="lg" mb="xs">JavaScript Example:</Text>
            <Paper p="xs" bg="gray.0" mb="md">
              <Text component="pre" size="sm">
                {`// Encoding
const encoded = btoa('Hello, World!');
// Result: SGVsbG8sIFdvcmxkIQ==

// Decoding
const decoded = atob('SGVsbG8sIFdvcmxkIQ==');
// Result: Hello, World!`}
              </Text>
            </Paper>

            <Text size="sm" mb="lg">
              Our online Base64 encoder/decoder tool provides a convenient way to handle Base64 conversions without writing code. It's perfect for quick encoding/decoding tasks, debugging, and data validation.
            </Text>

            <Title order={3} size="h4" mb="md">
              Related Concepts and Technologies
            </Title>
            <List size="sm" spacing="xs">
              <List.Item>MIME (Multipurpose Internet Mail Extensions)</List.Item>
              <List.Item>Data URIs and embedded resources</List.Item>
              <List.Item>JWT (JSON Web Tokens)</List.Item>
              <List.Item>SSL/TLS certificates</List.Item>
              <List.Item>Binary-to-text encoding schemes</List.Item>
              <List.Item>Content-Transfer-Encoding</List.Item>
            </List>
          </Paper>

          <Paper shadow="sm" p="md" radius="md" withBorder>
            <Title order={2} size="h3" mb="md">
              Security Considerations
            </Title>
            <Text size="sm" mb="md">
              While Base64 encoding can make data unreadable to humans, it is NOT encryption. It's a encoding scheme designed for data transport, not security. Never use Base64 encoding alone to protect sensitive information.
            </Text>
            <Alert color="blue" radius="md">
              <Text size="sm">
                This tool processes all encoding and decoding locally in your browser. No data is ever sent to any server, ensuring your information remains private and secure.
              </Text>
            </Alert>
          </Paper>
        </Stack>
      </Stack>
    </Container>
  );
}
