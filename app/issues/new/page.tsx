"use client";
import React from "react";
import { TextField, TextArea, Button } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

const NewIssuePage = () => {
  return (
    <div className="space-y-2 max-w-xl">
      <TextField.Root>
        <TextField.Input placeholder="Title" />
      </TextField.Root>
      <SimpleMDE placeholder="Description" />
      <Button>Submit new Issue</Button>
    </div>
  );
};

export default NewIssuePage;
