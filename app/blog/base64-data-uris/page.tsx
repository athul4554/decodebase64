'use client';

import { Container, Title, Text, Stack, Paper, Code, List } from '@mantine/core';

export default function Base64DataUris() {
  return (
    <Container size="lg" py="xl">
      <Stack gap="xl">
        <div>
          <Text c="dimmed" mb="md">Published on April 3, 2024 · 5 min read</Text>
          <Title order={1} size="h1" mb="xs">
            Working with Data URIs and Base64
          </Title>
          <Text size="lg" c="dimmed">
            Learn how to embed images and files in HTML/CSS using Base64 encoded Data URIs.
          </Text>
        </div>

        <Paper p="xl" shadow="sm" withBorder>
          <Stack gap="lg">
            <section>
              <Title order={2} size="h2" mb="md">
                What are Data URIs?
              </Title>
              <Text>
                Data URIs (or data URLs) allow you to embed small files directly into HTML or CSS as base64-encoded strings. 
                They begin with 'data:' followed by an optional MIME type, and the base64-encoded data. This eliminates the 
                need for separate HTTP requests for small resources.
              </Text>
              <Code block mb="md">
                {`// Data URI Structure
data:[<media type>][;base64],<data>

// Example
data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA...`}
              </Code>
            </section>

            <section>
              <Title order={2} size="h2" mb="md">
                Common Use Cases
              </Title>
              <List spacing="sm" mb="lg">
                <List.Item>Small images in HTML/CSS (icons, logos)</List.Item>
                <List.Item>Custom fonts using @font-face</List.Item>
                <List.Item>SVG images in CSS backgrounds</List.Item>
                <List.Item>Small audio files for web applications</List.Item>
                <List.Item>Embedding PDF files inline</List.Item>
              </List>
            </section>

            <section>
              <Title order={2} size="h2" mb="md">
                Converting Files to Data URIs
              </Title>
              <Text mb="md">Here's how to convert files to Data URIs in JavaScript:</Text>
              <Code block mb="md">
                {`// Using FileReader
const fileInput = document.querySelector('input[type="file"]');
const file = fileInput.files[0];
const reader = new FileReader();

reader.onload = function(e) {
  const dataUri = e.target.result;
  console.log(dataUri);
  // data:image/jpeg;base64,/9j/4AAQSkZJRg...
};

reader.readAsDataURL(file);

// For images in HTML
<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA..." alt="Icon" />

// For backgrounds in CSS
.icon {
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA...');
}`}
              </Code>
            </section>

            <section>
              <Title order={2} size="h2" mb="md">
                MIME Types and Base64
              </Title>
              <Text mb="md">Common MIME types for Data URIs:</Text>
              <Code block mb="lg">
                {`// Images
image/png
image/jpeg
image/gif
image/svg+xml

// Fonts
font/woff
font/woff2
font/ttf

// Documents
application/pdf
text/plain
text/html

// Audio
audio/mpeg
audio/wav`}
              </Code>
            </section>

            <section>
              <Title order={2} size="h2" mb="md">
                Best Practices and Considerations
              </Title>
              <List spacing="sm">
                <List.Item>Only use for small files (ideally under 5KB)</List.Item>
                <List.Item>Consider caching implications (Data URIs can't be cached separately)</List.Item>
                <List.Item>Base64 encoding increases file size by ~33%</List.Item>
                <List.Item>Use for critical above-the-fold images</List.Item>
                <List.Item>Consider performance impact on mobile devices</List.Item>
                <List.Item>Test browser compatibility for specific use cases</List.Item>
              </List>
            </section>

            <section>
              <Title order={2} size="h2" mb="md">
                Performance Tips
              </Title>
              <List spacing="sm">
                <List.Item>
                  <Text fw={500}>Selective Usage</Text>
                  <Text size="sm">Only use Data URIs for small, frequently used resources</Text>
                </List.Item>
                <List.Item>
                  <Text fw={500}>Image Optimization</Text>
                  <Text size="sm">Optimize images before converting to Base64</Text>
                </List.Item>
                <List.Item>
                  <Text fw={500}>Caching Strategy</Text>
                  <Text size="sm">Consider implementing local storage caching for Data URIs</Text>
                </List.Item>
                <List.Item>
                  <Text fw={500}>Loading Performance</Text>
                  <Text size="sm">Balance between Data URIs and traditional resource loading</Text>
                </List.Item>
              </List>
            </section>
          </Stack>
        </Paper>
      </Stack>
    </Container>
  );
} 