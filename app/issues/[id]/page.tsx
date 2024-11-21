import React from "react";
import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import { Heading, Flex, Card, Text, Box, Grid, Button } from "@radix-ui/themes";
import ReactMarkdown from "react-markdown";
import delay from "delay";
import { Pencil2Icon } from "@radix-ui/react-icons";
import Link from "next/link";
interface Props {
  params: { id: string };
}

const IssueDetailpage = async ({ params }: Props) => {
  // Validate if the `id` is a number
  const id = parseInt(params.id, 10);

  if (isNaN(id)) {
    notFound(); // Show "not found" for invalid `id` parameters
  }

  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });

  await delay(400);
  console.log(issue);
  if (!issue) notFound();

  return (
    <Grid columns={{ initial: "1", md: "2" }} gap="5">
      <Box>
        <Heading>{issue.title}</Heading>
        <Flex className="gap-2" my="2">
          <IssueStatusBadge status={issue.status} />
          <Text>{issue.createdAt.toDateString()}</Text>
        </Flex>
        <Card className="prose" mt="4">
          <ReactMarkdown>{issue.description}</ReactMarkdown>
        </Card>
      </Box>
      <Box>
        <Button>
          <Pencil2Icon />
          <Link href={`/issues/${issue.id}/edit`}>Edit issue</Link>
        </Button>
      </Box>
    </Grid>
  );
};

export default IssueDetailpage;
