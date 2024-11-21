import React from "react";
import IssueForm from "../../_components/IssueForm";
import prisma from "@/prisma/client";

const EditIssuePage = async ({ params }: { params: { id: string } }) => {
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!issue) return null;

  return <IssueForm issue={issue} />;
};

export default EditIssuePage;
