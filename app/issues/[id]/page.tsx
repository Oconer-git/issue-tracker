import React from "react";
import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import { Heading, Flex, Card, Text, Box } from "@radix-ui/themes";
import ReactMarkdown from "react-markdown";
import delay from "delay";

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
  );
};

export default IssueDetailpage;
