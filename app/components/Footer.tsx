'use client';

import { Container, Text, Group, Stack, Anchor, Divider, Paper } from '@mantine/core';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Paper component="footer" py="md" mt="xl" withBorder>
      <Container size="lg">
        <Stack gap="md">
          <Group justify="space-between" wrap="wrap">
            <Text size="sm" fw={500}>
              © {currentYear} Base64 Decode. All rights reserved.
            </Text>
            <Group gap="lg" wrap="wrap">
              <Anchor href="/blog" size="sm">
                Blog
              </Anchor>
              <Anchor href="/privacy" size="sm">
                Privacy Policy
              </Anchor>
              <Anchor href="/terms" size="sm">
                Terms of Service
              </Anchor>
            </Group>
          </Group>

          <Divider />

          <Stack gap="xs">
            <Text size="xs" c="dimmed">
              This website uses cookies to ensure you get the best experience on our website. By continuing to use this site, you consent to our use of cookies in accordance with our Privacy Policy.
            </Text>
            <Text size="xs" c="dimmed">
              Disclaimer: This tool processes all data locally in your browser. We do not store, transmit, or have access to any data you input or generate. Base64 encoding is not a form of encryption and should not be used for securing sensitive information.
            </Text>
            <Text size="xs" c="dimmed">
              Base64 Decode is an independent tool and is not affiliated with any standards organization. All trademarks and registered trademarks are the property of their respective owners.
            </Text>
          </Stack>
        </Stack>
      </Container>
    </Paper>
  );
} 