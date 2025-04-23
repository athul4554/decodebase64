'use client';

import { Container, Title, Text, Stack, Card, Group, Button, Badge } from '@mantine/core';
import Link from 'next/link';

const blogPosts = [
  {
    slug: 'understanding-base64',
    title: 'Understanding Base64 Encoding: A Complete Guide',
    description: 'Learn everything about Base64 encoding, its uses, and how it works under the hood.',
    date: '2024-04-03',
    category: 'Tutorial',
    readTime: '8 min read'
  },
  {
    slug: 'base64-jwt-authentication',
    title: 'Using Base64 in JWT Authentication',
    description: 'Explore how Base64 encoding is used in JSON Web Tokens (JWT) for secure API authentication.',
    date: '2024-04-03',
    category: 'Security',
    readTime: '6 min read'
  },
  {
    slug: 'base64-data-uris',
    title: 'Working with Data URIs and Base64',
    description: 'Learn how to embed images and files in HTML/CSS using Base64 encoded Data URIs.',
    date: '2024-04-03',
    category: 'Web Development',
    readTime: '5 min read'
  }
];

export default function Blog() {
  return (
    <Container size="lg" py="xl">
      <Stack gap="xl">
        <div>
          <Title order={1} size="h1" mb="xs">
            Base64 Blog
          </Title>
          <Text c="dimmed" size="lg">
            Learn about Base64 encoding, best practices, and real-world applications
          </Text>
        </div>

        <Stack gap="md">
          {blogPosts.map((post) => (
            <Card key={post.slug} shadow="sm" padding="lg" radius="md" withBorder>
              <Stack gap="md">
                <Group justify="space-between" align="center">
                  <Badge color="blue" variant="light">
                    {post.category}
                  </Badge>
                  <Text size="sm" c="dimmed">
                    {post.date} · {post.readTime}
                  </Text>
                </Group>

                <Title order={2} size="h3">
                  {post.title}
                </Title>

                <Text size="sm" c="dimmed" lineClamp={2}>
                  {post.description}
                </Text>

                <Button
                  component={Link}
                  href={`/blog/${post.slug}`}
                  variant="light"
                  color="blue"
                  mt="md"
                  radius="md"
                >
                  Read More
                </Button>
              </Stack>
            </Card>
          ))}
        </Stack>
      </Stack>
    </Container>
  );
} 