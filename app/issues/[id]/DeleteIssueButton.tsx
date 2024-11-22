import React from "react";
import { Button } from "@radix-ui/themes";
import Link from "next/link";

const DeleteIssueButton = ({ issueId }: { issueId: number }) => {
  return <Button color="red">Delete</Button>;
};

export default DeleteIssueButton;
