import React from "react";
import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import { Heading, Flex, Card, Text } from "@radix-ui/themes";

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

  if (!issue) notFound();

  return (
    <div>
      <Heading>{issue.title}</Heading>
      <Flex className="gap-2" my="2">
        <IssueStatusBadge status={issue.status} />
        <Text>{issue.description}</Text>
      </Flex>
      <Card>{issue.createdAt.toDateString()}</Card>
    </div>
  );
};

export default IssueDetailpage;
