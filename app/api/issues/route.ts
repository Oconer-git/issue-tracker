import { NextResponse, NextRequest } from "next/server";
import prisma from "@/prisma/client";
import z from "zod";

const schema = z.object({
  title: z.string().min(1, "tile is required").max(199),
  description: z.string().min(1, "description is required"),
});

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = schema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.format(), { status: 400 });

  const createdIssue = await prisma.issue.create({
    data: {
      title: validation.data.title,
      description: validation.data.description,
    },
  });

  return NextResponse.json(createdIssue, { status: 201 });
}
