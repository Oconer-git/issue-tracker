import { Box } from "@radix-ui/themes";
import React from "react";
import { Skeleton } from "@/app/components";

const IssueFormSkeleton = () => {
  return (
    <>
      <Box className="max-w-xl">
        <Skeleton height="1.8rem" />
        <Skeleton height="24rem" />
      </Box>
    </>
  );
};

export default IssueFormSkeleton;
